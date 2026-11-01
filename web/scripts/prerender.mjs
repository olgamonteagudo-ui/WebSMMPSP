/**
 * Pre-renderizado del contenido de la web.
 *
 * Renderiza los componentes de React a HTML estático y lo inserta dentro de
 * <div id="root"> en `index.html`, de modo que el HTML que recibe Google (y
 * cualquier visitante sin JavaScript) contiene todo el texto de la página.
 * La aplicación sigue cargándose después y toma el control del mismo contenedor.
 *
 * Uso:
 *     node scripts/prerender.mjs
 *
 * Ejecutarlo cada vez que cambie el contenido de las secciones (src/components
 * o src/data). El script es idempotente: reemplaza el marcado anterior en lugar
 * de añadir uno nuevo.
 *
 * Nota: el comando habitual de despliegue (`npm run build`) no lo ejecuta, por
 * lo que el pre-renderizado queda "congelado" en `index.html` hasta que se vuelva
 * a lanzar a mano.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "index.html");

const START = "<!--PRERENDER:START-->";
const END = "<!--PRERENDER:END-->";

const vite = await createServer({
  root,
  logLevel: "error",
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.tsx");
  const markup = renderToString(React.createElement(App));

  const source = readFileSync(indexPath, "utf8");
  if (!source.includes(START) || !source.includes(END)) {
    throw new Error(`No se encontraron los marcadores ${START} / ${END} en index.html`);
  }

  // Se elimina el marcado prerenderizado anterior (si lo hay) antes de insertar el nuevo
  const base = source.replace(
    new RegExp(`${START}[\\s\\S]*?${END}`),
    `${START}${END}`,
  );
  const updated = base.replace(`${START}${END}`, `${START}${markup}${END}`);

  writeFileSync(indexPath, updated, "utf8");
  console.log(`Contenido pre-renderizado: ${(markup.length / 1024).toFixed(1)} KB insertados en index.html`);
} finally {
  await vite.close();
}

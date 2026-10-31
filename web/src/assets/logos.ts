/**
 * Logotipos de la web, incrustados como data URI (base64) en módulos de texto.
 * De este modo forman parte del código fuente y no dependen de archivos binarios externos.
 *
 * Origen de las imágenes:
 *  - Logo oficial de la SMMPySP: web del II Congreso (cdecongresos.es) y canal de YouTube de la Sociedad.
 *  - Logo de la SEMPSPGS: sempspgs.es
 */
export { logoHd } from "./logo-hd";
export { logoSymbol } from "./logo-symbol";
export { logoSymbolWhite } from "./logo-symbol-white";
export { logoSempspgs } from "./logo-sempspgs";

import { logoHd as _hd } from "./logo-hd";

/** Logo completo (símbolo + texto). Se usa siempre sobre fondo blanco, por lo que comparte imagen con la versión HD. */
export const logoFull = _hd;

import { cn } from "@/utils/cn";
import { logoFull, logoHd, logoSymbol, logoSymbolWhite } from "@/assets/logos";

export { logoFull, logoHd, logoSymbol, logoSymbolWhite };

interface LogoProps {
  /**
   * full    → símbolo + texto (fondo transparente)
   * hd      → versión de alta resolución sobre blanco
   * symbol  → solo el símbolo granate
   * white   → solo el símbolo en blanco (para fondos oscuros)
   */
  variant?: "full" | "hd" | "symbol" | "white";
  className?: string;
}

const SOURCES = {
  full: logoFull,
  hd: logoHd,
  symbol: logoSymbol,
  white: logoSymbolWhite,
} as const;

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <img
      src={SOURCES[variant]}
      alt="Sociedad Murciana de Medicina Preventiva y Salud Pública"
      className={cn("select-none object-contain", className)}
      draggable={false}
    />
  );
}

/** Logo horizontal para cabecera: símbolo + nombre en texto */
export function LogoLockup({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <a href="#inicio" className={cn("group flex items-center gap-3", className)} aria-label="Ir al inicio">
      <Logo
        variant={light ? "white" : "symbol"}
        className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex flex-col leading-tight">
        <span className={cn("text-[11px] font-medium tracking-wide", light ? "text-brand-100/80" : "text-stone-500")}>
          Sociedad Murciana de
        </span>
        <span className={cn("text-[15px] font-bold sm:text-base", light ? "text-white" : "text-stone-900")}>
          Medicina Preventiva
        </span>
        <span className={cn("text-[15px] font-bold sm:text-base", light ? "text-white" : "text-stone-900")}>
          y Salud Pública
        </span>
      </span>
    </a>
  );
}

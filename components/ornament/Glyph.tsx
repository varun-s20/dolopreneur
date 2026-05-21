import { type SVGProps } from "react";

/**
 * Four custom geometric marks used as decorative section glyphs
 * (echo the X / O / ✦ trio from the references but redrawn as our own set).
 */

export function GlyphStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.5 L13.8 9.2 L21.6 8.4 L15.7 13.5 L19.2 20.4 L12 16.6 L4.8 20.4 L8.3 13.5 L2.4 8.4 L10.2 9.2 Z" />
    </svg>
  );
}

export function GlyphX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.6 3.2 L12 9.6 L18.4 3.2 L20.8 5.6 L14.4 12 L20.8 18.4 L18.4 20.8 L12 14.4 L5.6 20.8 L3.2 18.4 L9.6 12 L3.2 5.6 Z" />
    </svg>
  );
}

export function GlyphO(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

export function GlyphClover(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="7.5" cy="7.5" r="4.5" />
      <circle cx="16.5" cy="7.5" r="4.5" />
      <circle cx="7.5" cy="16.5" r="4.5" />
      <circle cx="16.5" cy="16.5" r="4.5" />
    </svg>
  );
}

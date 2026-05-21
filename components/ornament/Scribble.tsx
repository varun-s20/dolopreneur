import { type SVGProps } from "react";

export function ScribbleLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      preserveAspectRatio="none"
      {...props}
    >
      <path d="M16 32 C 38 6, 120 6, 180 22 C 196 30, 178 50, 110 52 C 40 54, 4 46, 22 28" />
    </svg>
  );
}

export function ScribbleArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 12 C 30 6, 70 28, 78 48 C 82 60, 70 70, 50 64" />
      <path d="M44 58 L 50 64 L 56 56" />
    </svg>
  );
}

export function ScribbleSquiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 300 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      preserveAspectRatio="none"
      {...props}
    >
      <path d="M4 56 C 30 12, 60 80, 96 40 S 160 6, 196 48 S 270 18, 296 52" />
    </svg>
  );
}

export function ScribbleCornerLoops(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      {...props}
    >
      <path d="M10 180 C 30 120, 80 100, 140 130 C 180 150, 190 110, 150 90 C 110 70, 70 110, 80 150" />
      <path d="M150 90 C 170 80, 188 70, 196 56" />
    </svg>
  );
}

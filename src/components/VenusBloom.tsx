import type { SVGProps } from "react";

// Stylized Venus / woman empowerment glyph
export function VenusBloom({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* petals around the circle */}
      <path d="M12 2.5c1.2 1.6 1.2 3.4 0 5" opacity="0.55" />
      <path d="M5.5 5.5c1.8.4 3 1.6 3.4 3.4" opacity="0.55" />
      <path d="M18.5 5.5c-1.8.4-3 1.6-3.4 3.4" opacity="0.55" />
      {/* head */}
      <circle cx="12" cy="9.5" r="4.2" />
      {/* cross stem */}
      <path d="M12 13.7v7.8" />
      <path d="M9 18.5h6" />
    </svg>
  );
}

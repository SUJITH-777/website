import type { SVGProps } from "react";

/** Inline marks from Swarn Aayu Brand Identity — gold via `currentColor`. */
export function UdayaMark({
  className,
  size = 22,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden
      {...props}
    >
      <line x1="10" y1="56" x2="70" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M 15 56 A 25 25 0 0 1 65 56" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="31" r="8" fill="currentColor" />
      <line x1="40" y1="21" x2="40" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function HybridMark({
  className,
  size = 40,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden
      {...props}
    >
      <line x1="8" y1="56" x2="72" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 14 56 A 26 26 0 0 1 66 56" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <g fill="currentColor" opacity="0.28">
        <path d="M40 18Q43 24 40 30Q37 24 40 18Z" />
        <path d="M40 18Q43 24 40 30Q37 24 40 18Z" transform="rotate(45 40 31)" />
        <path d="M40 18Q43 24 40 30Q37 24 40 18Z" transform="rotate(90 40 31)" />
        <path d="M40 18Q43 24 40 30Q37 24 40 18Z" transform="rotate(135 40 31)" />
        <path d="M40 18Q43 24 40 30Q37 24 40 18Z" transform="rotate(180 40 31)" />
        <path d="M40 18Q43 24 40 30Q37 24 40 18Z" transform="rotate(225 40 31)" />
        <path d="M40 18Q43 24 40 30Q37 24 40 18Z" transform="rotate(270 40 31)" />
        <path d="M40 18Q43 24 40 30Q37 24 40 18Z" transform="rotate(315 40 31)" />
      </g>
      <circle cx="40" cy="31" r="8" fill="currentColor" />
      <line x1="40" y1="21" x2="40" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="24" x2="54.5" y2="18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="24" x2="25.5" y2="18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Brand Identity v1 — Inquiry Arc (preferred direction A, currentColor). */
export function InquiryArcMark({
  className,
  size = 80,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M 40 6 A 34 34 0 1 0 72 48"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 40 18 A 22 22 0 1 0 62 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="72" cy="48" r="5" fill="currentColor" />
    </svg>
  );
}

/** Brand Identity v2 — trinity / orbit mark (currentColor). */
export function TrinityMarkV2({
  className,
  size = 22,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M 40 6 A 34 34 0 1 0 72 48"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="40"
        x2="40"
        y2="14"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="40"
        x2="17"
        y2="55"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="40"
        x2="63"
        y2="55"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
        strokeLinecap="round"
      />
      <circle cx="40" cy="14" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="17" cy="55" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="63" cy="55" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="40" cy="40" r="2.5" fill="currentColor" />
      <circle cx="72" cy="48" r="5" fill="currentColor" />
    </svg>
  );
}

/** Aayu care lockup — white heart outline on gold rounded square (brand asset). */
export function GoldHeartSquircle({
  size = 36,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
      {...props}
    >
      <rect x="1" y="1" width="38" height="38" rx="10" fill="var(--hero-kicker)" />
      <path
        d="M20 12.2c-1.9-2.1-5.4-1.7-5.4 1.8 0 2.2 1.1 3.4 3.1 5l2.3 2.4 2.3-2.4c2-1.6 3.1-2.8 3.1-5 0-3.5-3.5-3.9-5.4-1.8Z"
        stroke="#ffffff"
        strokeWidth="1.65"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

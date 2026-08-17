import { cn } from "@/lib/utils";

/** Official Google Play logo — the four-colour play triangle (blue, red,
 *  yellow, green). Fixed brand colours, so it renders correctly on any
 *  badge background. Per Google's branding guidelines, swap for the full
 *  "Get it on Google Play" badge artwork before launch. */
export function GooglePlayGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={cn("size-5", className)}
      aria-hidden="true"
    >
      <path
        fill="#00d3ff"
        d="M47 0C36.3 5.6 29.3 15.7 29.3 28.9v454.2c0 13.2 7 23.3 17.7 28.9l256.7-256L47 0z"
      />
      <path fill="#ff3d44" d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1z" />
      <path
        fill="#ffc900"
        d="m469.7 234.6-68.4-39.2-72.5 72.5 72.5 72.5 70.1-40.2c20.5-16.2 20.5-49.4-1.7-65.6z"
      />
      <path fill="#00d95f" d="M104.6 502.9 325.3 282.2l60.1 60.1L104.6 502.9z" />
    </svg>
  );
}

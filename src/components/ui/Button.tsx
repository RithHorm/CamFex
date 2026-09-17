import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "on-dark"
  | "outline-on-dark";

const variantClasses: Record<ButtonVariant, string> = {
  // Solid terracotta, off-white text, 4px radius, no shadow.
  primary:
    "bg-terracotta text-off-white rounded hover:bg-terracotta/90 active:bg-terracotta/80",
  // Outlined ink, ink text, transparent fill.
  secondary:
    "bg-transparent text-ink border border-ink rounded hover:bg-ink/5 active:bg-ink/10",
  // Text link, terracotta, underline on hover only.
  tertiary:
    "bg-transparent text-terracotta underline-offset-4 hover:underline",
  // On an ink panel: solid terracotta, off-white text — never outlined white.
  "on-dark":
    "bg-terracotta text-off-white rounded hover:bg-terracotta/90 active:bg-terracotta/80",
  // A second-tier CTA on a dark/photo panel: build plan §5.3 forbids an
  // outlined-white treatment there, so this outlines in terracotta
  // instead — same locked palette, proper button affordance, not bare
  // text. Terracotta's own fill (ink/95, same value Card's scrim uses)
  // instead of a transparent one: terracotta text/border against a
  // lighter hero scrim alone can't reach 3:1 no matter how the shared
  // scrim is tuned (verified — see page.tsx hero comment), so this
  // button guarantees its own contrast locally rather than depending
  // on whatever photo-legibility opacity the rest of the hero needs.
  "outline-on-dark":
    "bg-ink/95 text-terracotta border border-terracotta rounded hover:bg-ink/90 active:bg-ink/85",
};

const sizeClasses: Record<ButtonVariant, string> = {
  primary: "min-h-11 px-6 py-3",
  secondary: "min-h-11 px-6 py-3",
  tertiary: "min-h-11 py-2",
  "on-dark": "min-h-11 px-6 py-3",
  "outline-on-dark": "min-h-11 px-6 py-3",
};

// Terracotta text has a hard ceiling of ~4.16:1 against black — it can
// never reach the 4.5:1 normal-text AA threshold, at any scrim darkness.
// outline-on-dark's label is bumped to ≥18.66px + bold to legitimately
// qualify as WCAG "large text" instead, dropping the requirement to
// 3:1, which it does clear. Every other variant keeps the shared size.
const textClasses: Record<ButtonVariant, string> = {
  primary: "font-medium text-base",
  secondary: "font-medium text-base",
  tertiary: "font-medium text-base",
  "on-dark": "font-medium text-base",
  "outline-on-dark": "font-bold text-xl",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-body transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

interface CommonProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Primary / secondary / tertiary / on-dark button, per build plan §5.3 & §7.
 * Renders a Next.js Link when given an href, otherwise a native button.
 */
export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${sizeClasses[variant]} ${textClasses[variant]} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

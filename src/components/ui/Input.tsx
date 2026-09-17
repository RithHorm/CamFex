import { useId } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

/**
 * Shared with Select.tsx so every underlined field carries the same
 * baseline. `onDark` switches ink-on-off-white for off-white-on-ink —
 * needed the first time a form lands inside a <Section tone="ink">
 * panel (Home's closing CTA); every prior use (Contact, Pricing gate,
 * Connect) was on a light section, so this went unexercised until now.
 */
export function getFieldClasses(onDark: boolean) {
  return `mt-2 block w-full border-0 border-b bg-transparent px-0 py-2 font-body text-base focus:border-terracotta focus:outline-none ${
    onDark
      ? "border-off-white/30 text-off-white placeholder:text-off-white/40"
      : "border-ink/25 text-ink placeholder:text-ink/40"
  }`;
}

export function labelClasses(onDark: boolean) {
  return `font-body text-sm font-medium ${onDark ? "text-off-white/70" : "text-ink/70"}`;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  /** Set on a dark (ink) section — swaps to off-white text/border. */
  onDark?: boolean;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  onDark?: boolean;
}

/**
 * Underlined (not boxed) form field — build plan §6.1, from the Ancora
 * reference. The one place any text/email/textarea input enters the
 * site; every form this phase is UI-only (no submit target), so these
 * carry no client-side state or validation.
 */
export function Input({
  label,
  id,
  className = "",
  onDark = false,
  ...props
}: InputProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return (
    <label htmlFor={fieldId} className="block">
      <span className={labelClasses(onDark)}>{label}</span>
      <input
        id={fieldId}
        className={`${getFieldClasses(onDark)} ${className}`}
        {...props}
      />
    </label>
  );
}

export function Textarea({
  label,
  id,
  rows = 4,
  className = "",
  onDark = false,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return (
    <label htmlFor={fieldId} className="block">
      <span className={labelClasses(onDark)}>{label}</span>
      <textarea
        id={fieldId}
        rows={rows}
        className={`${getFieldClasses(onDark)} resize-none ${className}`}
        {...props}
      />
    </label>
  );
}

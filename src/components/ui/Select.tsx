"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CaretDown, Check } from "@phosphor-icons/react/dist/ssr";
import { getFieldClasses, labelClasses } from "@/components/ui/Input";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  name?: string;
  defaultValue?: string;
  /** Set on a dark (ink) section — swaps to off-white text/border, same as Input. */
  onDark?: boolean;
  className?: string;
  id?: string;
}

const TYPEAHEAD_RESET_MS = 500;

/**
 * Custom-styled dropdown, replacing the native <select> — the native
 * options popup renders on the OS's own surface and ignores our
 * styling entirely, which is what caused the earlier unreadable-text
 * bug (onDark text inherited into a popup we didn't control). This
 * rebuild owns both the trigger and the popup, so contrast is correct
 * by construction rather than patched after the fact.
 *
 * Implements the WAI-ARIA APG "Collapsible Dropdown Listbox" pattern:
 * a button (aria-haspopup="listbox", aria-expanded) opens a
 * role="listbox" that takes real DOM focus and tracks the highlighted
 * option via aria-activedescendant, rather than moving focus onto
 * individual options. Arrow Up/Down/Home/End move the highlight,
 * Enter/Space commits and returns focus to the trigger, Escape closes
 * without changing the value, and printable keys type-ahead to the
 * first option whose label starts with what's been typed (buffered
 * and reset after a short pause, so "pr" for "Press" works the same
 * way a native select's type-ahead does).
 */
export function Select({
  label,
  options,
  name,
  defaultValue,
  onDark = false,
  className = "",
  id,
}: SelectProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const buttonId = `${fieldId}-button`;
  const labelId = `${fieldId}-label`;

  const initialIndex = Math.max(
    0,
    options.findIndex((option) => option.value === defaultValue),
  );

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);
  const typeahead = useRef({ query: "", timer: null as ReturnType<typeof setTimeout> | null });

  const selected = options[selectedIndex];

  function openListbox() {
    setActiveIndex(selectedIndex);
    setOpen(true);
  }

  function closeListbox({ focusButton = true }: { focusButton?: boolean } = {}) {
    setOpen(false);
    if (focusButton) buttonRef.current?.focus();
  }

  function commitSelection(index: number) {
    setSelectedIndex(index);
    closeListbox();
  }

  function moveActive(index: number) {
    setActiveIndex(Math.max(0, Math.min(options.length - 1, index)));
  }

  // Move real DOM focus onto the listbox whenever it opens, and keep the
  // highlighted option scrolled into view as the highlight moves.
  useEffect(() => {
    if (!open) return;
    listboxRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    optionRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  // Click-outside closes without stealing focus back, same idiom as Nav's dropdown.
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        closeListbox({ focusButton: false });
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function runTypeahead(char: string) {
    const state = typeahead.current;
    if (state.timer) clearTimeout(state.timer);
    state.query += char.toLowerCase();
    state.timer = setTimeout(() => {
      state.query = "";
    }, TYPEAHEAD_RESET_MS);

    const startAt = (activeIndex + 1) % options.length;
    const ordered = [
      ...options.slice(startAt),
      ...options.slice(0, startAt),
    ];
    const byQuery = ordered.find((option) =>
      option.label.toLowerCase().startsWith(state.query),
    );
    const match =
      byQuery ??
      ordered.find((option) =>
        option.label.toLowerCase().startsWith(char.toLowerCase()),
      );
    if (match) moveActive(options.indexOf(match));
  }

  function handleButtonKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openListbox();
    }
  }

  function handleListboxKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        moveActive(activeIndex + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        moveActive(activeIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        moveActive(0);
        break;
      case "End":
        event.preventDefault();
        moveActive(options.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        commitSelection(activeIndex);
        break;
      case "Escape":
        event.preventDefault();
        closeListbox();
        break;
      case "Tab":
        closeListbox({ focusButton: false });
        break;
      default:
        if (event.key.length === 1 && /\S/.test(event.key)) {
          runTypeahead(event.key);
        }
        break;
    }
  }

  const border = open
    ? "var(--color-terracotta)"
    : undefined;

  return (
    <div ref={rootRef} className={className}>
      <span id={labelId} className={labelClasses(onDark)}>
        {label}
      </span>
      <div className="relative">
        <button
          ref={buttonRef}
          id={buttonId}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${labelId} ${buttonId}`}
          onClick={() => (open ? closeListbox() : openListbox())}
          onKeyDown={handleButtonKeyDown}
          style={border ? { borderColor: border } : undefined}
          className={`${getFieldClasses(onDark)} pr-6 text-left`}
        >
          {selected.label}
        </button>
        <CaretDown
          size={14}
          weight="bold"
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 transition-transform ${open ? "rotate-180" : ""} ${onDark ? "text-off-white/50" : "text-ink/50"}`}
        />

        {open && (
          <ul
            ref={listboxRef}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={labelId}
            aria-activedescendant={`${fieldId}-option-${activeIndex}`}
            onKeyDown={handleListboxKeyDown}
            className={`absolute left-0 right-0 z-20 mt-1 max-h-60 overflow-auto border py-1 focus:outline-none ${
              onDark
                ? "border-off-white/20 bg-ink"
                : "border-ink/15 bg-off-white"
            }`}
          >
            {options.map((option, index) => {
              const isActive = index === activeIndex;
              const isSelected = index === selectedIndex;
              return (
                <li
                  key={option.value}
                  id={`${fieldId}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  ref={(el) => {
                    optionRefs.current[index] = el;
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => commitSelection(index)}
                  className={`flex cursor-pointer items-center justify-between gap-3 px-3 py-2 font-body text-base ${
                    isActive
                      ? "bg-terracotta text-off-white"
                      : onDark
                        ? "text-off-white"
                        : "text-ink"
                  }`}
                >
                  {option.label}
                  {isSelected && !isActive && (
                    <Check
                      size={14}
                      weight="bold"
                      aria-hidden="true"
                      className="text-terracotta"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {name && <input type="hidden" name={name} value={selected.value} />}
    </div>
  );
}

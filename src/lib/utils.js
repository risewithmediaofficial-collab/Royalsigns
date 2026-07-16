/**
 * Utility function to combine class names.
 * Simulates clsx + tailwind-merge behavior for non-tailwind environment.
 */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

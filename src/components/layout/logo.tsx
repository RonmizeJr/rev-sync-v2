// components/layout/logo.tsx
import Link from "next/link";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
      </svg>
      <span className="text-xl font-bold">ReviewFlow</span>
    </div>
  );
}

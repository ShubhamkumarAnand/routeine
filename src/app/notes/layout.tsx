import { type ReactNode } from "react";

export default function NotesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        your daily notes
      </h1>
      {children}
    </div>
  );
}

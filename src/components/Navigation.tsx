"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <Link
              className={`flex align-middle text-neutral-500 transition-all hover:text-neutral-800 ${
                pathname === "/notes" ? "text-lg font-bold text-gray-200" : ""
              }`}
              href="/notes"
            >
              <span className="relative px-2 py-1">Notes</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}

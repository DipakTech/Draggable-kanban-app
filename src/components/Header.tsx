import { Link } from "react-router-dom";
import { ThemeToggle } from "./ui/themeToggle";

export default function Header() {
  return (
    <div className="relative mx-auto w-full max-w-7xl flex justify-center z-50">
      <header className="fixed inset-x-0 top-0 h-14 shadow backdrop-blur-md flex items-center justify-center">
        <div className="flex w-11/12 max-w-5xl items-center justify-between bg-white dark:bg-slate-950 rounded-full px-4 py-1">
          <Link
            to="/"
            className="flex items-center text-lg font-semibold uppercase cursor-pointer"
          >
            <span className="-ml-1.5 inline-block -rotate-90 text-[8px] leading-[0] text-slate-900 dark:text-slate-300">
              t
            </span>
            <span className="ml-1 text-xl tracking-[-0.075em] text-slate-900 dark:text-slate-300">
              kanban
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}

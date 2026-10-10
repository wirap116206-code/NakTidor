import Logo from "../homepage/Logo";
import LogoutButton from "./LogoutButton";

interface HeaderProps {
  setShowAddForm: (show: boolean) => void;
}

export default function Header({ setShowAddForm }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-700 bg-slate-800 px-3 py-3 sm:px-6 sm:py-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <div className="min-w-0 shrink">
          <div className="origin-left scale-90 sm:scale-100">
            <Logo />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LogoutButton />

          <button
            type="button"
            onClick={() => setShowAddForm(true)}
            className="flex shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-fuchsia-700 px-2.5 py-2 text-xs font-medium text-white transition-colors hover:bg-fuchsia-800 active:scale-95 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-base"
          >
            <span className="sm:hidden">+ Add</span>
            <span className="hidden sm:inline">+ Add Sleep Record</span>
          </button>
        </div>
      </div>
    </header>
  );
}

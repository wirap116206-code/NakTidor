import Logo from "../homepage/Logo";
import LogoutButton from "./LogoutButton";

interface HeaderProps {
  setShowAddForm: (show: boolean) => void;
}

export default function Header({ setShowAddForm }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-700 bg-slate-800 px-4 py-3 sm:px-6 sm:py-4">
      <div className="flex items-center justify-between gap-3">
        <Logo />

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LogoutButton />

          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-fuchsia-700 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-fuchsia-800 active:scale-95 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-base"
          >
            <span className="hidden sm:inline">Add Sleep Record</span>
            <span className="sm:hidden">+ Add Record</span>
          </button>
        </div>
      </div>
    </header>
  );
}

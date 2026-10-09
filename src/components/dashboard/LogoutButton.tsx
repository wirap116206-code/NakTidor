import { supabase } from "../../../lib/supabse";

export default function LogoutButton() {
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Logout error", error.message);
    }
  };
  return (
    <button
      onClick={signOut}
      className="bg-slate-700 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
    >
      Log out
    </button>
  );
}

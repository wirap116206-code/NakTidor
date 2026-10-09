import { supabase } from "../lib/supabse";

export function useGooleSigin() {
  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (error) {
        console.log("Google Signin error", error);
      }
    } catch (error) {
      console.log("Google sigin error", error);
    }
  };
  return { signInWithGoogle };
}

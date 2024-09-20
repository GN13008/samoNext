import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Se déconnecter
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <button className="btn btn-outline btn-sm">
        <Link href="/sign-in">Créer un compte</Link>
      </button>
      <button className="btn btn-primary btn-sm">
        <Link href="/sign-up">Se connecter</Link>
      </button>
    </div>
  );
}

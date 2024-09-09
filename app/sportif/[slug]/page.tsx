import MyPageProfil from "@/components/profil/PageProfil.component";
import PageProfil from "@/components/profil/PageProfil.component";
import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Profil({ params }: { params: { slug: string } }) {
  console.log("YEAH YEAH", params.slug);
  if (params.slug != "enzo") {
    notFound();
  }
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    let { data: profiles, error } = await supabase
      .from("profiles")
      .select("id, email")
      .eq("id", user.id);

    console.log("PROFIL", profiles);
  }

  console.log("USER", user);

  // if (user && params.slug == user.slug) {
  if (user) {
    return (
      <main className="min-h-screen">
        <MyPageProfil />
      </main>
    );
  } else {
    return (
      <main className="min-h-screen">
        <PageProfil />
      </main>
    );
  }
}

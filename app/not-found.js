import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container mx-auto p-8 min-h-screen">
      <div className="flex flex-col h-full items-center py-12 gap-4">
        <h2>Page introuvable</h2>
        <p>Oups, cette page est inexistante !</p>
        <Link className="btn btn-md btn-primary text-white mt-8" href="/">
          Revenir à l'accueil
        </Link>
      </div>
    </div>
  );
}

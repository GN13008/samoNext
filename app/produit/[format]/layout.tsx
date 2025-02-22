import { notFound } from "next/navigation";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { format: string };
}>) {
  // TODO GET ALL FORMAT FROM DB
  if (["rond", "carre", "plat", "hexagone"].indexOf(params.format) < 0) {
    notFound();
  }
  return <div className="">{children}</div>;
}

import { notFound } from "next/navigation";
import { fakeData } from "@/utils/fake-db";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { format: string };
}>) {
  if (!(params.format in fakeData)) {
    notFound();
  }
  return <div className="">{children}</div>;
}

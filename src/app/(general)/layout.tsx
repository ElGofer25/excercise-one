import { Navbar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="flex flex-col m-2 p-2">by Diego Devops</h1>
        {children}
      </main>
    </>
  );
}
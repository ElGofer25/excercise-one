import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'About Page',
  description: 'Here you cand find some information about us',


};

export default function AboutPage() {
  return (
    <main className=" flex-flex-col items-center ">
      <div className="text-center flex flex-col">
          <h1 className="text-5xl gap-2 p-6">
            About Page
          </h1>
          <p className="font-medium text-white/70">
            This is your about page
          </p>
      </div>
    </main>
  );
}
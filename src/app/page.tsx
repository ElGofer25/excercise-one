import { Navbar } from "@/components";
import Image from "next/image";


export const metadata = {
 title: 'Home Page',
 description: 'This is our Home Page',
};

export default function Home() {
  return (
    <main className="text-center">
      <Navbar />
      <main className="flex flex-col gap-2 p-6">
        <h1 className="text-5xl font-bold">
          Welcome to excersise one, Diego
        </h1>

        <p className="text-2xl font-medium text-white/70">
          What would you like to do?
        </p>
      </main>
    </main>  
  );
}


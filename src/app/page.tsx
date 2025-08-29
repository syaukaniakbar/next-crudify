import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold">Welcome to MyApp</h1>
          <p className="mt-4">This is the home page content.</p>
        </div>
      </main>
    </>
  );
}

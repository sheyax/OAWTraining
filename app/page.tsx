import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import Modules from "@/components/Modules";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 ">
      <Banner/>
      <Intro/>
      <Modules/>
      <Testimonials/>
    </main>
  );
}

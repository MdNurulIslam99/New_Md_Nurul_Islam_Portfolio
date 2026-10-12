import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Md Nurul Islam",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <About />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Skills | Md Nurul Islam",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Skills />
      </main>
      <Footer />
    </>
  );
}

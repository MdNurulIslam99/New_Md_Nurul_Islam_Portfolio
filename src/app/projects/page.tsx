import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Md Nurul Islam",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Projects />
      </main>
      <Footer />
    </>
  );
}

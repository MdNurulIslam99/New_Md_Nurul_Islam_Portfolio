import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Md Nurul Islam",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

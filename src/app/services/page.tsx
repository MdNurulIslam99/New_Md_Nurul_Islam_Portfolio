import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Md Nurul Islam",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Services />
      </main>
      <Footer />
    </>
  );
}

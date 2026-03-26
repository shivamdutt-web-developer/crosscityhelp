import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

export const metadata = {
  title: "Cross City | Premium IT & Software Solutions",
  description: "Cross City is a premier software agency. We provide cutting-edge services including Digital Marketing, Web Development, Software Engineering, SAAS, and HRMS solutions.",
  keywords: ["Software Development", "Web Developer", "Digital Marketing", "SAAS Solutions", "HRMS Development"],
};

export default function MainLayout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}

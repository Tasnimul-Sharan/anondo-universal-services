import ChatBot from "./ChatBot";
import Footer from "./Footer";
import LeafletPopup from "./LeafletPopup";
import Navbar from "./Navbar";
import ScrollToTopButton from "./ScrollToTopButton";
export default function Layout({ children, footerData, navbarData }) {
  return (
    <div className="flex flex-col min-h-screen">
      <LeafletPopup />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* <div className="fixed bottom-0 right-0 p-4 z-50">
        <ChatBot />
      </div> */}
      <ScrollToTopButton />
    </div>
  );
}

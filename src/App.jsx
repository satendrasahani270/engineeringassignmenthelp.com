import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Review from "./components/Review";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import OurServices from "./OurServices";
import WhatsApp from "./components/WhatsApp";
import SerSub from "./components/SerSub";
import { useState } from "react";
import { X } from "lucide-react";

function App() {
  const [activeComponent, setActiveComponent] = useState("subject");

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <Hero />
      <SerSub
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      <Content />
      <Review />
      <OurServices />
      <FAQ />
      <Footer />
      <WhatsApp />

   {isOpen &&(   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        onClick={handleClose}
        >
          <X size={30} className="text-white" />
        </button>
        <img
          src="/assets/offer.png"
          alt="Modal Content"
          className="rounded-lg w-[37rem] h-auto "
        />
      </div>)}
    </>
  );
}

export default App;

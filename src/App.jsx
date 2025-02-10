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
import { Helmet } from "react-helmet";
function App() {
  const [activeComponent, setActiveComponent] = useState("subject");
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.engineeringassignmenthelp.com/"
        />
      </Helmet>
      <Header
      // activeComponent={activeComponent}
      // setActiveComponent={setActiveComponent}
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
    </>
  );
}

export default App;

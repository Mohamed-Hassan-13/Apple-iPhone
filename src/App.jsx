import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import Model from "./Components/Model";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import * as Sentry from "@sentry/react";
import HowitWork from "./Components/HowitWork";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowitWork />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);

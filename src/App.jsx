import "./index.css";
import Header from "./components/Header";
import HowToUse from "./components/HowToUse";
import Plans from "./components/Plans";
import ChatBot from "./components/ChatBot";
import FAQ from "./components/FAQ";
import CTA1 from "./components/CTA1";
import CTA2 from "./components/CTA2";
import KeyFeatures from "./components/KeyFeatures";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#f5f7fb]">
      <div className="container mx-auto max-w-screen-2xl">
        <Header />
        <HowToUse />
        <Plans />
        <ChatBot />
        <FAQ />
        <CTA1 />
        <KeyFeatures />
        <CTA2 />
        <Footer />
      </div>
    </div>
  );
}

export default App;

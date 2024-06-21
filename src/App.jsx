import "./index.css";
import Header from "./components/Header";
import HowToUse from "./components/HowToUse";
import Plans from "./components/Plans";
import ChatBot from "./components/ChatBot";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="bg-[#f5f7fb]">
      <Header />
      <HowToUse />
      <Plans />
      <ChatBot />
      <FAQ />
    </div>
  );
}

export default App;

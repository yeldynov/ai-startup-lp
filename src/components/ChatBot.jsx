import Devices from "../assets/ai-devices.png";
import UnionL from "../assets/union.svg";
import UnionR from "../assets/union-r.svg";
import Arrow from "../assets/arrow-ai.png";

const ChatBot = () => {
  return (
    <section className="relative mt-[75px] lg:mt-[182px]" id="chatbot ">
      {/* Grouping images */}
      <div className="flex h-[400px] flex-col bg-[url('assets/ai-section-bg.png')] bg-center md:mt-[90px] md:h-[569px] md:items-center md:justify-center">
        <div className="left-[124px] top-[73px] mx-10 mt-20 rounded-lg bg-opacity-90 py-3 text-white md:absolute md:mx-0 md:mt-[55px]">
          {/* header */}
          <div className="flex w-[415px] flex-col items-center justify-center p-0 px-5 md:px-0">
            <div className="mt-[18px] flex items-center justify-center gap-2 md:mt-0">
              <img src={UnionL} alt="" />
              <h5 className="text-center font-darker-grotesque text-[10px] font-bold leading-[1.5] md:mt-0 md:text-lg">
                EXCLUSIVE
              </h5>
              <img src={UnionR} alt="" />
            </div>
            {/* text */}
            <h2 className="relative pt-[2px] text-center font-space-grotesk text-[26px] font-semibold leading-[120%] md:pt-0 md:text-left md:text-[40px]">
              <span className="bg-clip-text text-[#21e8fd] text-transparent">
                AI Chatbot:
              </span>{" "}
              Natural Language Interaction
            </h2>
            <p className="mt-[14px] text-center font-darker-grotesque text-[12px] leading-[150%] md:mt-[24px] md:text-left md:text-lg">
              Engage in seamless conversation with our AI chatbot, using natural
              language to execute search commands effortlessly.
            </p>
          </div>{" "}
          <div className="mt-7 flex gap-8">
            <button className="flex h-[57px] w-full items-center justify-center rounded-lg bg-white px-[15px] py-[12px] font-darker-grotesque text-sm font-bold text-[#030610] md:w-[187px] md:justify-between md:px-[24px] md:py-[14px] md:text-lg">
              Schedule a demo
              <svg
                width="16.000000"
                height="19.000000"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <path
                  id="Vector"
                  d="M6 7C6 7 10 9.94 10 11C10 12.05 6 15 6 15"
                  stroke="#030610"
                  strokeOpacity="1.000000"
                  strokeWidth="1.250000"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <img className="-mt-[60px]" src={Arrow} alt="" />
          </div>
        </div>

        <div className="absolute left-[711px] top-[60px]">
          <img src={Devices} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ChatBot;

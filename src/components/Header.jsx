/* eslint-disable react/no-unescaped-entities */
import Logo from "../assets/logo.png";
import GoogleBtn from "../assets/google-btn-icon.png";
import ArrowRight from "../assets/arrow-right.svg";
import UnionL from "../assets/union.svg";
import UnionR from "../assets/union-r.svg";
import ArrowButtons from "../assets/arrow-buttons.svg";

const Header = () => {
  return (
    <header className="pt-[40px] text-gray-700">
      <div className="container mx-[124px] flex flex-col flex-wrap items-center justify-between p-0 md:flex-row">
        <a className="" href="https://www.vixc.com/" target="_blank">
          <img src={Logo} alt="Logo" />
        </a>

        <nav className="flex justify-between gap-[42px] font-darker-grotesque text-xl font-semibold leading-7">
          <a className="hover:text-gray-900">Features</a>
          <a className="hover:text-gray-900">How to use</a>
          <a className="hover:text-gray-900">Plans</a>
          <a className="hover:text-gray-900">Chatbot</a>
          <a className="hover:text-gray-900">FAQ</a>
        </nav>

        <div className="mr-[88px] flex w-[158px] max-w-sm rounded-lg bg-gradient-to-tr from-pink-600 to-blue-600 p-px shadow-lg">
          <button className="flex flex-1 items-center justify-between rounded-lg bg-white px-5 py-[7px] text-left font-darker-grotesque text-lg font-bold leading-[1.5] text-[rgb(3,6,16)]">
            Start free trial
            <img src={ArrowRight} alt="" />
          </button>
        </div>
      </div>
      {/* HERO */}
      <div className="mx-[318px] mt-[70px] flex flex-col items-center justify-start p-0">
        {/* eyebrow */}
        <div className="flex items-center justify-center gap-2">
          <img src={UnionL} alt="" />
          <h5 className="text-center font-darker-grotesque text-lg font-bold leading-[1.5] text-[#030610]">
            TOP AI PLATFORM
          </h5>
          <img src={UnionR} alt="" />
        </div>

        <h1 className="font-space-grotesk relative text-center text-[70px] font-semibold leading-[110%]">
          <span className="bg-gradient-to-r from-purple-600 to-blue-900 bg-clip-text text-transparent">
            Transform
          </span>{" "}
          your photo search with{" "}
          <span className="relative inline-block">
            AI precision
            <svg
              className="absolute -bottom-4 left-0 h-8 w-full"
              viewBox="0 0 100 10"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 9 C 30 4, 70 4, 100 9"
                fill="none"
                stroke="rgb(73, 186, 252)"
                strokeWidth="1"
              />
            </svg>
          </span>
        </h1>
        <p className="mt-[26px] px-[82.5px] text-center font-darker-grotesque text-lg leading-[1.5] text-[#081A56]">
          Meet VIXC, the ultimate photo search solution. With its intuitive web
          portal and mobile app, finding memories is as easy as saying, "Show me
          San Francisco lake photos." VIXC makes browsing effortless,
          transforming photo search into a delightful experience.
        </p>
        {/* buttons */}
        <div className="relative flex items-start justify-start gap-[18px] py-[30px]">
          <img
            className="absolute -left-[130px] top-1"
            src={ArrowButtons}
            alt="Arrow Curved"
          />
          <button className="flex w-[187px] items-center justify-between rounded-lg bg-gradient-to-r from-[#8D1EA2] to-[#090EDB] px-[24px] py-[14px] font-darker-grotesque text-lg font-medium text-white">
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
                stroke="white"
                strokeOpacity="1.000000"
                strokeWidth="1.250000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="flex max-w-sm rounded-lg bg-gradient-to-tr from-pink-600 to-blue-600 p-px shadow-lg">
            <button className="flex flex-1 items-center justify-between gap-1 rounded-lg bg-white px-[23px] py-[13px] text-left font-darker-grotesque text-lg font-bold leading-[1.5] text-[rgb(3,6,16)]">
              <img src={GoogleBtn} alt="" />
              Get started with Google
              <img src={ArrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

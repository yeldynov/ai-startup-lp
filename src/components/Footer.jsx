/* eslint-disable react/no-unescaped-entities */
import Logo from "../assets/logo.png";
import TwitterIcon from "../assets/twitter-icon.svg";

const Footer = () => {
  return (
    <footer className="mt-5 flex max-h-[700px] flex-col items-center bg-white md:mt-24 md:max-h-[420px] md:px-[124px]">
      {/* top */}
      <div className="relative z-20 mt-[60px] flex w-full flex-col justify-between px-5 md:flex-row md:items-center md:px-0">
        <div className="gradient-footer h-[150px] w-[1300px]"></div>
        {/* logo-social */}
        <div className="flex w-[231px] flex-col gap-5 md:w-[294px]">
          <img className="w-[140px] md:w-[139px]" src={Logo} alt="Main logo" />
          <p className="-mt-3 font-darker-grotesque text-[15px] text-[#081a56] md:-mt-0 md:text-lg">
            "Effortlessly organize and find your photos with VIXC – your
            AI-powered solution!"
          </p>
          <div className="-mt-2 md:-mt-0">
            <img src={TwitterIcon} alt="Twitter Icon" />
          </div>
        </div>
        {/* links */}
        <div className="mt-8 flex gap-[133px] md:-ml-10 md:gap-[139px]">
          {/* left */}
          <div className="">
            <h5 className="font-space-grotesk text-[15px] leading-[150%] text-[#030610] md:text-xl">
              Company
            </h5>
            <div className="flex flex-col md:pt-2">
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] md:text-xl"
                href="#"
              >
                Home
              </a>
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] md:text-xl"
                href="#"
              >
                Features
              </a>
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] md:text-xl"
                href="#"
              >
                How to use
              </a>
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] md:text-xl"
                href="#"
              >
                Plans
              </a>
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] md:text-xl"
                href="#"
              >
                Chatbot
              </a>
              <a
                className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] md:text-xl"
                href="#"
              >
                FAQ
              </a>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-[55px]">
            {/* top */}
            <div className="">
              <h5 className="font-space-grotesk text-[15px] leading-[150%] text-[#030610] md:text-xl">
                Legal
              </h5>
              <div className="flex flex-col">
                <a
                  className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] md:text-xl"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] md:text-xl"
                  href="#"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
            {/* bottom */}
            <div className="">
              <h5 className="font-space-grotesk text-[15px] leading-[150%] text-[#030610] md:text-xl">
                Contact Us
              </h5>
              <div className="flex flex-col">
                <a
                  className="font-darker-grotesque text-[16px] font-semibold leading-[150%] text-[#081a56] md:text-xl"
                  href="mailto:support@vixc.com"
                >
                  support@vixc.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* newsletter */}
        <div className="ml-[33px] mt-11 flex w-[254px] flex-col items-center justify-center gap-1 md:ml-0 md:mt-4 md:px-0">
          <h3 className="self-start font-space-grotesk text-[15px] leading-[150%] text-[#030610] md:text-xl">
            Newsletter
          </h3>
          <form className="flex w-full flex-col">
            <input
              className="my-[5px] h-[33px] w-full rounded-lg border border-[#a7a7a7] bg-white px-[13px] py-2 font-darker-grotesque text-xs md:h-[43px]"
              type="text"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="flex h-[33px] w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#8D1EA2] to-[#090EDB] px-[15px] py-[12px] font-darker-grotesque text-sm font-bold text-white md:h-[43px] md:justify-center md:px-[24px] md:py-[14px] md:text-lg"
            >
              Subscribe
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
          </form>
          <p className="pt-2 font-darker-grotesque text-xs font-medium leading-[150%] text-[#697586] md:pt-1">
            By subscribing you agree to with our{" "}
            <span className="text-[#030610]">Privacy Policy</span> and provide
            consent to receive updates from our company.
          </p>
        </div>
      </div>
      {/* bottom */}
      <div className="mb-10 pt-7 font-darker-grotesque text-[15px] text-[#081a56] md:pl-4 md:pt-16 md:text-lg">
        Copyright © 2024, All rights reserved by VIXC
      </div>
    </footer>
  );
};

export default Footer;

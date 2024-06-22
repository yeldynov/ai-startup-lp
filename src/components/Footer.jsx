/* eslint-disable react/no-unescaped-entities */
import Logo from "../assets/logo.png";
import TwitterIcon from "../assets/twitter-icon.svg";

const Footer = () => {
  return (
    <footer className="mt-32 flex h-[597px] flex-col items-center bg-white md:h-[382px] md:px-[124px]">
      {/* top */}
      <div className="relative z-20 mt-[60px] flex w-full items-center justify-between">
        <div className="gradient-footer h-[150px] w-[1300px]"></div>
        {/* logo-social */}
        <div className="-mt-12 flex flex-col gap-5 md:w-[294px]">
          <img className="w-[139px]" src={Logo} alt="Main logo" />
          <p className="font-darker-grotesque text-lg text-[#081a56]">
            "Effortlessly organize and find your photos with VIXC – your
            AI-powered solution!"
          </p>
          <div className="">
            <img src={TwitterIcon} alt="Twitter Icon" />
          </div>
        </div>
        {/* links */}
        <div className="-ml-10 flex gap-[139px]">
          {/* left */}
          <div className="">
            <h5 className="font-space-grotesk text-xl leading-[150%] text-[#030610]">
              Company
            </h5>
            <div className="flex flex-col pt-2">
              <a
                className="font-darker-grotesque text-xl font-semibold leading-[150%] text-[#081a56]"
                href="#"
              >
                Home
              </a>
              <a
                className="font-darker-grotesque text-xl font-semibold leading-[150%] text-[#081a56]"
                href="#"
              >
                Features
              </a>
              <a
                className="font-darker-grotesque text-xl font-semibold leading-[150%] text-[#081a56]"
                href="#"
              >
                How to use
              </a>
              <a
                className="font-darker-grotesque text-xl font-semibold leading-[150%] text-[#081a56]"
                href="#"
              >
                Plans
              </a>
              <a
                className="font-darker-grotesque text-xl font-semibold leading-[150%] text-[#081a56]"
                href="#"
              >
                Chatbot
              </a>
              <a
                className="font-darker-grotesque text-xl font-semibold leading-[150%] text-[#081a56]"
                href="#"
              >
                FAQ
              </a>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-[55px] pt-2">
            {/* top */}
            <div className="">
              <h5 className="font-space-grotesk text-xl leading-[150%] text-[#030610]">
                Legal
              </h5>
              <div className="flex flex-col">
                <a
                  className="font-darker-grotesque text-xl font-semibold leading-[150%] text-[#081a56]"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  className="font-darker-grotesque text-xl font-semibold leading-[150%] text-[#081a56]"
                  href="#"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
            {/* bottom */}
            <div className="">
              <h5 className="font-space-grotesk text-xl leading-[150%] text-[#030610]">
                Contact Us
              </h5>
              <div className="flex flex-col">
                <a
                  className="font-darker-grotesque text-xl font-semibold leading-[150%] text-[#081a56]"
                  href="mailto:support@vixc.com"
                >
                  support@vixc.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* newsletter */}
        <div className="flex w-[254px] flex-col items-center justify-center gap-1">
          <h3 className="-mt-4 self-start font-space-grotesk text-xl leading-[150%] text-[#030610]">
            Newsletter
          </h3>
          <form className="flex w-full flex-col">
            <input
              className="my-[5px] h-[43px] w-full rounded-lg border border-[#a7a7a7] bg-white px-[13px] py-2 font-darker-grotesque text-xs"
              type="text"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="flex h-[45px] w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#8D1EA2] to-[#090EDB] px-[15px] py-[12px] font-darker-grotesque text-sm font-bold text-white md:justify-center md:px-[24px] md:py-[14px] md:text-lg"
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
          <p className="pt-1 font-darker-grotesque text-xs font-medium leading-[150%] text-[#697586]">
            By subscribing you agree to with our{" "}
            <span className="text-[#030610]">Privacy Policy</span> and provide
            consent to receive updates from our company.
          </p>
        </div>
      </div>
      {/* bottom */}
      <div className="pl-4 pt-12 font-darker-grotesque text-lg text-[#081a56]">
        Copyright © 2024, All rights reserved by VIXC
      </div>
    </footer>
  );
};

export default Footer;

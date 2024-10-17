/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import Logo from "../assets/logo.png";
import GoogleBtn from "../assets/google-btn-icon.png";
import ArrowRight from "../assets/arrow-right.svg";
import UnionL from "../assets/union.svg";
import UnionR from "../assets/union-r.svg";
import ArrowButtons from "../assets/arrow-buttons.svg";

import CenterHeader from "../assets/center-header.png";
import LeftHeader from "../assets/header-imgs-left.png";
import RightHeader from "../assets/header-imgs-right.png";
import HeaderSphere from "../assets/header-sphere.png";

import HamburgerIcon from "../assets/hamburgher-icon.svg";

import Background from "../assets/bg.png";

// TODO: Add gradients to the header

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="home"
      style={{ backgroundImage: `url(${Background})` }}
      className="relative h-[938px] pt-[12px] text-gray-700 md:pt-[40px]"
    >
      {/* navbar */}
      <div className="container flex flex-wrap items-center justify-between p-0 px-5 md:mx-10 md:flex-row md:px-0 xl:mx-[124px]">
        <a
          className=""
          href="https://www.vixc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-[70px] md:w-auto" src={Logo} alt="Logo" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden justify-between gap-[42px] font-darker-grotesque text-xl font-semibold leading-7 md:flex">
          <a className="hover:text-gray-900 hover:underline" href="#features">
            Features
          </a>
          <a className="hover:text-gray-900 hover:underline" href="#how-to-use">
            How to use
          </a>
          <a className="hover:text-gray-900 hover:underline" href="#plans">
            Plans
          </a>
          <a className="hover:text-gray-900 hover:underline" href="#chatbot">
            Chatbot
          </a>
          <a
            className="hover:text-gray-900 hover:underline hover:underline-offset-2"
            href="#faq"
          >
            FAQ
          </a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <img
              className="ml-[36px] h-[20px] w-[23px] cursor-pointer"
              src={HamburgerIcon}
              alt=""
            />
          )}
        </div>

        {/* Mobile Navigation with Backdrop */}
        {isOpen && (
          <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full bg-black bg-opacity-50 md:hidden">
            <nav className="flex h-full w-full flex-col items-center gap-[42px] bg-white p-8 font-darker-grotesque text-xl font-semibold leading-7">
              <button className="self-end mb-8" onClick={toggleMenu}>
                <FaTimes className="text-2xl" />
              </button>
              <a
                className="hover:text-gray-900"
                href="#features"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                className="hover:text-gray-900"
                href="#how-to-use"
                onClick={toggleMenu}
              >
                How to use
              </a>
              <a
                className="hover:text-gray-900"
                href="#plans"
                onClick={toggleMenu}
              >
                Plans
              </a>
              <a
                className="hover:text-gray-900"
                href="#chatbot"
                onClick={toggleMenu}
              >
                Chatbot
              </a>
              <a
                className="hover:text-gray-900"
                href="#faq"
                onClick={toggleMenu}
              >
                FAQ
              </a>
            </nav>
          </div>
        )}

        <div className="flex h-[33px] w-[109px] max-w-sm rounded-lg bg-gradient-to-tr from-pink-600 to-blue-600 p-px shadow-lg md:mr-[88px] md:h-[43px] md:w-[158px]">
          <a
            href="https://dashboard-ai-pied.vercel.app/"
            target="_blank"
            className="flex flex-1 items-center justify-center rounded-lg bg-white text-left font-darker-grotesque text-sm font-bold leading-[1.5] text-[rgb(3,6,16)] hover:opacity-75 md:justify-between md:px-5 md:py-[7px] md:text-lg"
          >
            Start free trial
            <img src={ArrowRight} alt="Start free trial" />
          </a>
        </div>
      </div>
      {/* HERO */}
      <div className="flex flex-col items-center justify-start p-5 md:mx-[318px] md:mt-[70px] md:p-0">
        <img
          className="-mt-1 md:hidden"
          src={CenterHeader}
          alt="Scrapbook with travel photos"
        />
        {/* eyebrow */}
        <div className="mt-[18px] flex items-center justify-center gap-2 md:mt-0">
          <img src={UnionL} alt="" />
          <h5 className="text-center font-darker-grotesque text-[10px] font-bold leading-[1.5] text-[#030610] md:mt-0 md:text-lg">
            TOP AI PLATFORM
          </h5>
          <img src={UnionR} alt="" />
        </div>
        {/* text */}
        <h1 className="relative pt-[2px] text-center font-space-grotesk text-[40px] font-semibold leading-[110%] md:pt-0 lg:text-[52px] xl:text-[70px]">
          <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-900 bg-clip-text">
            Transform
          </span>{" "}
          your photo search with{" "}
          <span className="relative inline-block">
            AI precision
            <svg
              className="absolute left-0 w-full h-8 -bottom-4"
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
        <p className="mt-[14px] text-center font-darker-grotesque text-[15px] leading-[1.5] text-[#081A56] md:mt-[26px] md:px-[82.5px] md:text-lg">
          Meet VIXC, the ultimate photo search solution. With its intuitive web
          portal and mobile app, finding memories is as easy as saying, "Show me
          San Francisco lake photos." VIXC makes browsing effortless,
          transforming photo search into a delightful experience.
        </p>
        {/* buttons */}
        <div className="relative z-20 mx-[61.5px] flex flex-col items-start justify-start gap-1 pt-[23px] md:mx-0 md:flex-row md:gap-[18px] md:py-[30px]">
          <img
            className="absolute -left-[90px] -top-3 scale-[40%] md:-left-[130px] md:top-1 md:scale-100"
            src={ArrowButtons}
            alt="Arrow Curved"
          />
          <button className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#8D1EA2] to-[#090EDB] px-[15px] py-[12px] font-darker-grotesque text-sm font-medium text-white hover:brightness-150 md:w-[187px] md:justify-between md:px-[24px] md:py-[14px] md:text-lg">
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
          <div className="flex max-w-sm p-px rounded-lg shadow-lg bg-gradient-to-tr from-pink-600 to-blue-600">
            <button className="flex flex-1 items-center justify-between gap-1 rounded-lg bg-white px-[10px] py-3 text-left font-darker-grotesque text-sm font-bold leading-[1.5] text-[rgb(3,6,16)] hover:opacity-75 md:px-[23px] md:py-[13px] md:text-lg">
              <img src={GoogleBtn} alt="" />
              Get started with Google
              <img src={ArrowRight} alt="" />
            </button>
          </div>
        </div>
        {/* images */}
        <div className="left-[124px] top-[449px] flex h-[406px] gap-3 pt-[10px] md:absolute md:w-[calc(100%-124px)] md:scale-100 md:pt-0">
          {/* left */}
          <div className="left-0 top-[18px] md:absolute">
            <img src={LeftHeader} alt="" />
          </div>
          <img
            className="absolute left-[351px] top-[132px] hidden md:block"
            src={CenterHeader}
            alt="Scrapbook with travel photos"
          />
          {/* right */}
          <div className="left-[886px] top-0 md:absolute">
            <img src={RightHeader} alt="" />
          </div>
        </div>
        {/* decor */}
        <img
          className="absolute bottom-[213px] left-[156px] w-[57px] md:left-[1179px] md:top-[149px] md:w-[114px]"
          src={HeaderSphere}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;

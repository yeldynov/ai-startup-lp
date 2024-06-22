import UnionL from "../assets/union.svg";
import UnionR from "../assets/union-r.svg";
import GoogleBtn from "../assets/google-btn-icon.png";
import ArrowRight from "../assets/arrow-right.svg";

const CTA2 = () => {
  return (
    <section className="mt-[80px] md:mt-[140px]" id="cta2">
      <div className="relative mt-[60px] flex h-[560px] flex-col items-center bg-[url('assets/CTA2.png')] md:mt-[90px] md:h-[600px] md:justify-center md:bg-center">
        <div className="left-[124px] top-[103px] mt-[105px] h-[347px] w-[291px] rounded-md bg-white bg-opacity-90 p-[10px] md:absolute md:mx-0 md:mt-0 md:rounded-lg md:p-10 lg:h-[396px] lg:w-[544px]">
          {/* header */}
          <div className="flex flex-col items-center justify-center pt-1 md:pt-0">
            <div className="flex items-center justify-center gap-2 md:mr-6 md:mt-0">
              <img src={UnionL} alt="" />
              <h5 className="text-center font-darker-grotesque text-[10px] font-bold leading-[1.5] text-[#030610] md:mt-0 md:text-lg">
                TRY NOW
              </h5>
              <img src={UnionR} alt="" />
            </div>
            {/* text */}
            <h2 className="relative ml-1 self-start font-space-grotesk text-[26px] font-semibold leading-[120%] md:ml-0 md:text-[40px]">
              <span className="bg-gradient-to-r from-purple-600 to-blue-900 bg-clip-text text-transparent">
                Simple way
              </span>{" "}
              to manage your pictures
            </h2>
            <p className="ml-1 mt-[10px] font-darker-grotesque text-[15px] leading-[150%] text-[#081A56] md:ml-0 md:mt-[22px] md:text-lg">
              Discover an effortless solution for organizing your extensive
              photo collection with ease. Our platform offers a simple and
              intuitive way to manage and enjoy your cherished pictures
              hassle-free.
            </p>
          </div>

          <div className="mt-5 flex gap-4 px-1 md:mt-7 md:px-0">
            <button className="flex h-[45px] w-[161px] items-center justify-center rounded-lg bg-gradient-to-r from-[#8D1EA2] to-[#090EDB] px-[15px] py-[12px] font-darker-grotesque text-sm font-bold text-white md:h-[57px] md:w-[187px] md:justify-between md:px-[24px] md:py-[14px] md:text-lg">
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
              <button className="flex flex-1 items-center justify-between gap-1 rounded-lg bg-white px-[10px] py-3 text-left font-darker-grotesque text-sm font-bold leading-[1.5] text-[rgb(3,6,16)] md:px-[24px] md:py-[13px] md:text-lg">
                <img src={GoogleBtn} alt="" />
                Get started with Google
                <img src={ArrowRight} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA2;

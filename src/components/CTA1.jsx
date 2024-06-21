import Checkmark from "../assets/checkmark.svg";
import UnionL from "../assets/union.svg";
import UnionR from "../assets/union-r.svg";
import Arrow from "../assets/arrow-cta1.svg";

const CTA1 = () => {
  return (
    <section className="mt-[80px] md:mt-[260px]" id="cta1">
      <div className="relative mt-[60px] flex h-[560px] flex-col items-center bg-[url('assets/CTA1.png')] md:mt-[90px] md:h-[698px] md:justify-center md:bg-center">
        <div className="left-[124px] top-[110px] mt-[105px] h-[347px] w-[291px] rounded-md bg-white bg-opacity-90 p-[10px] md:absolute md:mx-0 md:mt-0 md:rounded-lg md:p-10 lg:h-[478px] lg:w-[527px]">
          {/* header */}
          <div className="flex flex-col items-center justify-center pt-1 md:pt-0">
            <div className="flex items-center justify-center gap-2 md:mr-3 md:mt-0">
              <img src={UnionL} alt="" />
              <h5 className="text-center font-darker-grotesque text-[10px] font-bold leading-[1.5] text-[#030610] md:mt-0 md:text-lg">
                ASSISTANCE
              </h5>
              <img src={UnionR} alt="" />
            </div>
            {/* text */}
            <h2 className="relative ml-1 self-start font-space-grotesk text-[26px] font-semibold leading-[120%] md:ml-0 md:text-[40px]">
              <span className="bg-gradient-to-r from-purple-600 to-blue-900 bg-clip-text text-transparent">
                Still have
              </span>{" "}
              questions?
            </h2>
            <p className="ml-1 mt-[10px] font-darker-grotesque text-[15px] leading-[150%] text-[#081A56] md:ml-0 md:mt-[18px] md:text-lg">
              If you still have questions, you can join a quick 30-minute
              demonstration session on how VIXC, empowered by AI technology,
              will help you search and organize your photo collections.
            </p>
          </div>
          <ul className="space-y-3 px-2 pt-4 font-space-grotesk text-[15px] md:px-0 lg:pt-[24px] lg:text-xl">
            <li className="flex items-center justify-start gap-3 md:gap-4">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Choose
              any date and time
            </li>
            <li className="flex items-center justify-start gap-3 md:gap-4">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> It&apos;s
              completely free
            </li>
            <li className="flex items-center justify-start gap-3 md:gap-4">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Get
              expert assistance
            </li>
          </ul>

          <div className="mt-5 flex gap-8 px-1 md:mt-7 md:px-0">
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
            <img
              className="h-[40px] w-[50px] md:-mt-[80px] md:h-auto md:w-auto"
              src={Arrow}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA1;

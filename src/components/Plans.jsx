import UnionL from "../assets/union.svg";
import UnionR from "../assets/union-r.svg";
import Crown from "../assets/crown.svg";
import Checkmark from "../assets/checkmark.svg";

import GoogleBtn from "../assets/google-btn-icon.png";
import ArrowRight from "../assets/arrow-right.svg";

const Plans = () => {
  return (
    <section id="plans" className="mt-[75px] lg:mt-[130px]">
      {/* header */}
      <div className="flex flex-col items-center justify-center p-0 px-5 md:mx-10 md:px-0">
        <div className="mt-[18px] flex items-center justify-center gap-2 md:mt-0">
          <img src={UnionL} alt="" />
          <h5 className="text-center font-darker-grotesque text-[10px] font-bold leading-[1.5] text-[#030610] md:mr-3 md:mt-0 md:text-lg">
            STREAMLINED
          </h5>
          <img src={UnionR} alt="" />
        </div>
        {/* text */}
        <h2 className="relative pt-[2px] text-center font-space-grotesk text-[26px] font-semibold leading-[120%] md:mr-3 md:w-1/2 md:pt-0 md:text-[40px]">
          <span className="bg-gradient-to-r from-purple-600 to-blue-900 bg-clip-text text-transparent">
            Discover
          </span>{" "}
          your perfect photo management plan
        </h2>
        <p className="mt-[14px] text-center font-darker-grotesque text-[12px] font-medium leading-[150%] text-[#081A56] md:mr-3 md:mt-[24px] md:w-[480px] md:text-lg">
          Find the ideal plan for your photo management needs and take control
          of your memories effortlessly.
        </p>
      </div>
      {/* Cards */}
      <div className="mt-7 flex flex-col gap-4 p-0 px-5 md:mt-10 md:flex-row md:gap-5 md:px-[124px]">
        {/* card */}
        <div className="flex h-[476px] flex-col items-start justify-start rounded-[4px] border-[0.5px] border-[#a7a7a7] bg-white p-[31px] md:h-[632px] md:w-[384px] md:rounded-lg">
          <div className="flex w-full flex-col items-start justify-start p-0">
            {/* top */}
            <div className="-mt-3 flex w-full flex-col items-start justify-start gap-3 md:-mt-1">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                  <img className="h-[21px] md:h-[32px]" src={Crown} alt="" />
                  <p className="font-space-grotesk text-[20px] md:text-[33px]">
                    Pro
                  </p>
                </div>
                <div className="rounded-[30px] bg-[#081a56] px-4 py-1">
                  <p className="font-darker-grotesque text-[15px] leading-[150%] text-white md:text-lg">
                    Popular
                  </p>
                </div>
              </div>
              <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                Perfect plan for professionals!
              </p>
              <div className="flex items-center justify-center gap-2 md:pt-1">
                <h2 className="font-space-grotesk text-[26px] font-medium leading-[120%] text-[#030610] md:text-[40px]">
                  $12
                </h2>
                <span className="font-darker-grotesque text-[15px] text-[#a7a7a7] md:text-lg">
                  /month
                </span>
              </div>
            </div>
            {/* bottom */}
            <div className="ml-1 mt-3 flex flex-col md:ml-0 md:mt-4">
              <p className="pt-2 font-darker-grotesque text-[15px] text-[#081a56] md:pt-0 md:text-lg">
                Loren Ipsum, Ipsum loren, loren ipsum loren impus loren ipsum
              </p>
              <div className="mt-4 flex flex-col gap-[10px] md:gap-[15px]">
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* google btn */}
          <div className="mt-[30px] flex w-full max-w-sm rounded-lg bg-gradient-to-tr from-pink-600 to-blue-600 p-px shadow-lg">
            <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-white px-[13px] py-3 text-left font-darker-grotesque text-sm font-bold leading-[1.5] text-[rgb(3,6,16)] md:px-[23px] md:py-[13px] md:text-lg">
              <img src={GoogleBtn} alt="" />
              Get started with Google
              <img src={ArrowRight} alt="" />
            </button>
          </div>
        </div>
        {/* card */}
        <div className="flex h-[476px] flex-col items-start justify-start rounded-[4px] border-[0.5px] border-[#a7a7a7] bg-white p-[31px] md:h-[632px] md:w-[384px] md:rounded-lg">
          <div className="flex w-full flex-col items-start justify-start p-0">
            {/* top */}
            <div className="-mt-3 flex w-full flex-col items-start justify-start gap-3 md:-mt-1">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                  <img className="h-[21px] md:h-[32px]" src={Crown} alt="" />
                  <p className="font-space-grotesk text-[20px] md:text-[33px]">
                    Pro
                  </p>
                </div>
                <div className="rounded-[30px] bg-[#081a56] px-4 py-1">
                  <p className="font-darker-grotesque text-[15px] leading-[150%] text-white md:text-lg">
                    Popular
                  </p>
                </div>
              </div>
              <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                Perfect plan for professionals!
              </p>
              <div className="flex items-center justify-center gap-2 md:pt-1">
                <h2 className="font-space-grotesk text-[26px] font-medium leading-[120%] text-[#030610] md:text-[40px]">
                  $12
                </h2>
                <span className="font-darker-grotesque text-[15px] text-[#a7a7a7] md:text-lg">
                  /month
                </span>
              </div>
            </div>
            {/* bottom */}
            <div className="ml-1 mt-3 flex flex-col md:ml-0 md:mt-4">
              <p className="pt-2 font-darker-grotesque text-[15px] text-[#081a56] md:pt-0 md:text-lg">
                Loren Ipsum, Ipsum loren, loren ipsum loren impus loren ipsum
              </p>
              <div className="mt-4 flex flex-col gap-[10px] md:gap-[15px]">
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* google btn */}
          <div className="mt-[30px] flex w-full max-w-sm rounded-lg bg-gradient-to-tr from-pink-600 to-blue-600 p-px shadow-lg">
            <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-white px-[13px] py-3 text-left font-darker-grotesque text-sm font-bold leading-[1.5] text-[rgb(3,6,16)] md:px-[23px] md:py-[13px] md:text-lg">
              <img src={GoogleBtn} alt="" />
              Get started with Google
              <img src={ArrowRight} alt="" />
            </button>
          </div>
        </div>
        {/* card */}
        <div className="flex h-[476px] flex-col items-start justify-start rounded-[4px] border-[0.5px] border-[#a7a7a7] bg-white p-[31px] md:h-[632px] md:w-[384px] md:rounded-lg">
          <div className="flex w-full flex-col items-start justify-start p-0">
            {/* top */}
            <div className="-mt-3 flex w-full flex-col items-start justify-start gap-3 md:-mt-1">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                  <img className="h-[21px] md:h-[32px]" src={Crown} alt="" />
                  <p className="font-space-grotesk text-[20px] md:text-[33px]">
                    Pro
                  </p>
                </div>
                <div className="rounded-[30px] bg-[#081a56] px-4 py-1">
                  <p className="font-darker-grotesque text-[15px] leading-[150%] text-white md:text-lg">
                    Popular
                  </p>
                </div>
              </div>
              <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                Perfect plan for professionals!
              </p>
              <div className="flex items-center justify-center gap-2 md:pt-1">
                <h2 className="font-space-grotesk text-[26px] font-medium leading-[120%] text-[#030610] md:text-[40px]">
                  $12
                </h2>
                <span className="font-darker-grotesque text-[15px] text-[#a7a7a7] md:text-lg">
                  /month
                </span>
              </div>
            </div>
            {/* bottom */}
            <div className="ml-1 mt-3 flex flex-col md:ml-0 md:mt-4">
              <p className="pt-2 font-darker-grotesque text-[15px] text-[#081a56] md:pt-0 md:text-lg">
                Loren Ipsum, Ipsum loren, loren ipsum loren impus loren ipsum
              </p>
              <div className="mt-4 flex flex-col gap-[10px] md:gap-[15px]">
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
                <div className="flex items-center justify-start gap-[14px]">
                  <img
                    className="w-[16.25px] md:w-[22.75px]"
                    src={Checkmark}
                    alt=""
                  />
                  <p className="font-darker-grotesque text-[15px] text-[#081a56] md:text-lg">
                    Everything in Free Plan
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* google btn */}
          <div className="mt-[30px] flex w-full max-w-sm rounded-lg bg-gradient-to-tr from-pink-600 to-blue-600 p-px shadow-lg">
            <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-white px-[13px] py-3 text-left font-darker-grotesque text-sm font-bold leading-[1.5] text-[rgb(3,6,16)] md:px-[23px] md:py-[13px] md:text-lg">
              <img src={GoogleBtn} alt="" />
              Get started with Google
              <img src={ArrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

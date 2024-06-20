import UnionL from "../assets/union.svg";
import UnionR from "../assets/union-r.svg";

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
      <div className="">
        {/* card */}
        <div className=""></div>
        {/* card */}
        <div className=""></div>
        {/* card */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default Plans;

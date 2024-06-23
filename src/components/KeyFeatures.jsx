/* eslint-disable react/prop-types */
import Background from "../assets/bg.png";
import UnionL from "../assets/union.svg";
import UnionR from "../assets/union-r.svg";
import Robot from "../assets/smart-search.svg";
import Eye from "../assets/ai-integration.svg";
import Face from "../assets/facial-tagging.svg";
import Book from "../assets/centric-design.svg";
import Arrow from "../assets/features-arrow.svg";

const KeyFeatures = () => {
  return (
    <section
      id="features"
      className="w-full"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* header */}
      <div className="flex flex-col items-center justify-center p-0 px-5 pt-[65px] md:mx-10 md:px-0 md:pt-[130px]">
        <div className="mt-[11px] flex items-center justify-center gap-2 md:mt-0">
          <img src={UnionL} alt="" />
          <h5 className="text-center font-darker-grotesque text-[10px] font-bold leading-[1.5] text-[#030610] md:mt-0 md:text-lg">
            EFFORTLESS
          </h5>
          <img src={UnionR} alt="" />
        </div>
        {/* text */}
        <h2 className="relative text-center font-space-grotesk text-[26px] font-semibold leading-[120%] md:w-1/2 md:pt-0 md:text-[40px]">
          <span className="bg-gradient-to-r from-purple-600 to-blue-900 bg-clip-text text-transparent">
            Key features
          </span>{" "}
          of VIXC&apos;s photo management and search
        </h2>
        <p className="mt-[14px] px-7 text-center font-darker-grotesque text-[15px] font-medium leading-[150%] text-[#081A56] md:mt-[24px] md:w-[500px] md:px-0 md:text-lg">
          Streamlined AI-powered photo management and search solution for
          effortless organization and retrieval of your memories.
        </p>
      </div>

      <div className="relative z-20 flex overflow-hidden px-[40px] py-12 md:px-[124px]">
        <div className="gradient-background h-[150px] w-[1300px] md:h-[110px] md:w-[1192px]"></div>
        <div className="mx-auto -mt-2 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={<img src={Robot} />}
            title="Smart Search"
            description="Utilizes a web portal and mobile app to facilitate photo search based on natural descriptions, locations, objects, and sentiments."
          />
          <Card
            icon={<img src={Eye} />}
            title="AI Integration"
            description="Utilizes a web portal and mobile app to facilitate photo search based on natural descriptions, locations, objects, and sentiments."
          />
          <Card
            icon={<img src={Face} />}
            title="Facial Tagging"
            description="Allows face tagging to personalize the photo collection, making it easy and efficient to quickly find specific photos and images."
          />
          <Card
            icon={<img src={Book} />}
            title="Centric Design"
            description="Designed to be intuitive and user-friendly, seamlessly combining advanced technologies with a simple, friendly interface."
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;

const Card = ({ icon, title, description }) => (
  <div className="notched-corner relative -mb-3 flex h-[347px] w-[265px] flex-col justify-center gap-2 rounded-lg md:h-[359px] md:w-[283px] md:p-[24px]">
    <div className="self-center pt-8 md:pt-0">{icon}</div>
    <h3 className="px-10 font-space-grotesk text-xl font-medium leading-[140%] text-[#030610] md:px-0 md:text-[33px]">
      {title}
    </h3>
    <p className="mb-2 pl-10 pr-5 font-darker-grotesque text-[15px] leading-[150%] text-[#081a56] md:pl-0 md:pr-0 md:text-lg">
      {description}
    </p>
    <a
      href="#"
      className="flex gap-2 self-start px-10 font-space-grotesk text-[15px] text-[#030610] md:px-0 md:text-xl"
    >
      EXPLORE MORE
      <img src={Arrow} alt="" />
    </a>
  </div>
);

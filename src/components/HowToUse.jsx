import Gallery from "../assets/gallery.png";
import Checkmark from "../assets/checkmark-icon.png";

const HowToUse = () => {
  return (
    <section id="how-to-use" className="mt-5 lg:mt-[43px]">
      {/* Manage everything */}
      <div className="flex flex-col items-center justify-center gap-3 p-0 px-5 md:mx-10 md:flex-row md:px-0 lg:flex-row lg:gap-11 xl:mx-[124px]">
        <div className="w-full lg:mb-0 lg:w-[770px]">
          <img src={Gallery} alt="Gallery" className="h-auto w-full" />
        </div>

        <div className="w-full px-7 lg:w-[375px] lg:px-5 lg:py-[30px]">
          <h2 className="mb-3 font-space-grotesk text-xl font-semibold lg:mb-8 lg:pt-2 lg:text-[33px]">
            Manage everything
          </h2>
          <p className="font-darker-grotesque text-[15px] leading-[1.5] text-[#071a56] lg:mb-0 lg:text-lg">
            Easily organize all your photos in one convenient place for
            effortless access and streamlined management with advanced features.
          </p>
          <ul className="space-y-3 pt-4 font-space-grotesk text-[15px] lg:pt-6 lg:text-xl">
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Convenient centralized access
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Effortless organization
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Simplified management tasks
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mt-[90px] flex h-[470px] flex-col items-center justify-center bg-[url('assets/facial-id.png')] bg-center px-5 md:ml-[94px] md:mr-5 md:px-0">
        <div className="absolute left-[30px] w-full rounded-lg bg-white bg-opacity-90 px-7 lg:w-[390px] lg:px-5 lg:py-[30px]">
          <h2 className="mb-3 font-space-grotesk text-xl font-semibold lg:mb-8 lg:pt-2 lg:text-[33px]">
            Facial identification
          </h2>
          <p className="font-darker-grotesque text-[15px] leading-[1.5] text-[#071a56] lg:mb-0 lg:text-lg">
            Effortlessly upload your photos and let the platform accurately
            identify faces, streamlining organization and enhancing viewing
            experience.
          </p>
          <ul className="space-y-3 pt-4 font-space-grotesk text-[15px] lg:pt-6 lg:text-xl">
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Instant
              facial recognition
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" />{" "}
              Personalized photo organization
            </li>
            <li className="flex items-center justify-start gap-3">
              <img className="w-4 lg:w-auto" src={Checkmark} alt="" /> Enhanced
              privacy controls
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;

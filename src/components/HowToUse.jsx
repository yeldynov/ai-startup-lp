import Gallery from "../assets/gallery.png";
import Checkmark from "../assets/checkmark-icon.png";

const HowToUse = () => {
  return (
    <section id="how-to-use" className="mt-[43px]">
      {/* Manage everything */}
      <div className="flex flex-col items-center justify-center gap-11 p-0 px-5 md:mx-10 md:flex-row md:px-0 lg:flex-row xl:mx-[124px]">
        <div className="w-full lg:mb-0 lg:w-[770px]">
          <img src={Gallery} alt="Gallery" className="h-auto w-full" />
        </div>

        <div className="w-full lg:w-[375px] lg:px-5 lg:py-[30px]">
          <h2 className="mb-4 font-space-grotesk text-[33px] font-semibold">
            Manage everything
          </h2>
          <p className="mb-4 font-darker-grotesque text-lg leading-[1.5] text-[#071a56]">
            Easily organize all your photos in one convenient place for
            effortless access and streamlined management with advanced features.
          </p>
          <ul className="space-y-3 pt-3 font-space-grotesk text-xl">
            <li className="flex items-center justify-start gap-3">
              <img src={Checkmark} alt="" /> Convenient centralized access
            </li>
            <li className="flex items-center justify-start gap-3">
              <img src={Checkmark} alt="" /> Effortless organization
            </li>
            <li className="flex items-center justify-start gap-3">
              <img src={Checkmark} alt="" /> Simplified management tasks
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;

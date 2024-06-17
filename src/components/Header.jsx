import Logo from "../assets/logo.png";
import ArrowRight from "../assets/arrow-right.svg";

const Header = () => {
  return (
    <header className="pt-[40px] text-gray-700">
      <div className="container mx-[124px] flex flex-col flex-wrap items-center justify-between p-0 md:flex-row">
        <a className="" href="https://www.vixc.com/" target="_blank">
          <img src={Logo} alt="Logo" />
        </a>

        <nav className="flex justify-between gap-[42px] font-darker-grotesque text-xl font-semibold leading-7">
          <a className="hover:text-gray-900">Features</a>
          <a className="hover:text-gray-900">How to use</a>
          <a className="hover:text-gray-900">Plans</a>
          <a className="hover:text-gray-900">Chatbot</a>
          <a className="hover:text-gray-900">FAQ</a>
        </nav>

        <div className="mr-[88px] flex w-[158px] max-w-sm rounded-lg bg-gradient-to-tr from-pink-600 to-blue-600 p-px shadow-lg">
          <button className="flex flex-1 items-center justify-between rounded-lg bg-white px-5 py-[7px] text-left font-darker-grotesque text-lg font-bold leading-[1.5] text-[rgb(3,6,16)]">
            Start free trial
            <img src={ArrowRight} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

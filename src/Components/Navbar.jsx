import { navLists } from "../Constants";
import { appleImg, bagImg, searchImg } from "../Utils";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center py-5 sm:px-10 px-5">
      <nav className="flex screen-max-width w-full">
        <img src={appleImg} alt="Logo Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((navlink, index) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={index}
            >
              {navlink}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

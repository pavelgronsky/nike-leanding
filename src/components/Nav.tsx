import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants"

const Nav = () => {
  return (
    <header className="padding-x   absolute z-10 w-full py-8">
      <nav className="max-container flex items-center  justify-between">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a className="font-montserrat text-lg leading-normal text-slate-gray">
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

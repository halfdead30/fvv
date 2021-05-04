import { useRef, useState } from "react";
import { Link } from "react-scroll";
import { useOnClickOutside, useHandleScroll } from "../../hooks";
import HeaderMenu from "../header-menu/header-menu.component";
import Logo from "../header-logo/header-logo.component";
import HeaderInfo from "../header-info/header-info.component";
import Burger from "../burger/burger.component";

const HeaderNav = () => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  useOnClickOutside(node, () => setOpen(false));

  const scrolled = useHandleScroll();

  return (
    <>
      <nav className={scrolled ? "header-nav sticky" : "header-nav"}>
        <HeaderMenu open={open} setOpen={setOpen} scrolled={scrolled} />
        <Link to="home" smooth={true} className="header-logo">
          <Logo />
        </Link>
        <div className="header-container" ref={node}>
          <HeaderInfo time="10:00 до 21:00" phone="tel:+380985866186" />
          <Burger open={open} setOpen={setOpen} />
        </div>
      </nav>
    </>
  );
};

export default HeaderNav;

import MenuLink from "../menu-link/menu-link.component";
import BannerAddress from "../banner-address/banner-address.component";
import BookBtn from "../book-btn/book-btn.component";

const HeaderMenu = ({ open, setOpen, scrolled }) => {
  return (
    <ul className={scrolled ? "header-menu modify" : "header-menu"} open={open}>
      <MenuLink />
      <li className="header-menu__link">
        <BookBtn
          className="ms_booking"
          dataUrl="https://n355262.yclients.com/company:339128"
        />
      </li>
      <BannerAddress />
    </ul>
  );
};

export default HeaderMenu;

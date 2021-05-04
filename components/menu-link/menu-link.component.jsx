import { Link } from "react-scroll";
import linksData from "./links-data";
import translate from "../../i18n/translate";

const MenuLink = () => {
  const links = linksData;

  return (
    <>
      {Object.keys(links).map((key) => {
        return (
          <li key={key} className="header-menu__link">
            <Link to={links[key]} smooth={true} className="header-menu__anchor">
              {translate(`menu.${key}`)}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default MenuLink;

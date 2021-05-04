import Icon from "../icon/icon.component";
import translate from "../../i18n/translate";

const FooterAddress = () => {
  return (
    <address className="footer-address">
      <Icon href={"#map-icon"} size="icon-small" />
      <a href="https://goo.gl/maps/kkDSkqLc4akH9eQ38">{translate("address")}</a>
    </address>
  );
};

export default FooterAddress;

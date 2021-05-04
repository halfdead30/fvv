import BannerContact from "../banner-contact/banner-contact.component";
import BannerAddress from "../banner-address/banner-address.component";
import translate from "../../i18n/translate";

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">{translate("bannerTitle")}</h1>
      <p className="banner__text">{translate("bannerText")}</p>
      <BannerContact />
      <BannerAddress />
    </div>
  );
};

export default Banner;

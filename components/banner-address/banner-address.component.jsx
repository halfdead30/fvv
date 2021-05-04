import translate from "../../i18n/translate";

const BannerAddress = () => {
  return (
    <address className="banner-address">
      <svg className="icon icon-small">
        <use href={"images/icons/sprite.svg#map-icon"}></use>
      </svg>
      <a href="https://goo.gl/maps/kkDSkqLc4akH9eQ38">{translate("address")}</a>
    </address>
  );
};

export default BannerAddress;

import Icon from "../icon/icon.component";
import linksData from "./links-data";

const BannerLink = () => {
  const links = linksData;

  return (
    <div className="banner-social">
      {links.map(({ id, url, spritePath }) => {
        return (
          <a key={id} href={url} className="banner-social__link">
            <Icon href={spritePath} size="icon-small" />
          </a>
        );
      })}
    </div>
  );
};

export default BannerLink;

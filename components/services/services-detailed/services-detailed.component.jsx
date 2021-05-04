import translate from "../../../i18n/translate";
import Icon from "../../icon/icon.component";

const ServicesDetailed = ({ spritePath, title, text }) => {
  return (
    <div className="services-detailed">
      <div className="services-detailed__ico">
        <Icon href={`${spritePath}`} size="" />
      </div>
      <strong className="services-detailed__title">{translate(title)}</strong>
      <p className="services-detailed__text">{translate(text)}</p>
    </div>
  );
};

export default ServicesDetailed;

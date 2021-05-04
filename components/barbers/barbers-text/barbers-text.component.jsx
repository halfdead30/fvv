import translate from "../../../i18n/translate";
import Icon from "../../icon/icon.component";

const BarbersText = ({ name, text, url, spritePath }) => {
  return (
    <div className="barbers-text">
      <h2 className="barbers-text__title">{translate(name)}</h2>
      <p className="barbers-text__info">{translate(text)}</p>

      <div className="barbers-social">
        <a href={url} className="barbers-social__link">
          <Icon href={spritePath} size="icon-small" />
        </a>
      </div>
    </div>
  );
};

export default BarbersText;

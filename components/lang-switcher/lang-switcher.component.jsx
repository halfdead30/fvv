import { useContext } from "react";
import { LOCALES } from "../../i18n/index";
import { AppContext } from "../../context/index";
import translate from "../../i18n/translate";
import Icon from "../icon/icon.component";

const LangSwitcher = () => {
  const { state, dispatch } = useContext(AppContext);

  const setLanguage = (locale) => {
    dispatch({
      type: "setLocale",
      locale,
    });
  };

  const languages = {
    usa: "en-US",
    ukraine: "ua-UA",
    russia: "ru-RU",
  };

  return (
    <div className="lang-switcher">
      {Object.entries(languages).map((item, index) => {
        if (item[1] === state.locale) {
          return (
            <span key={index}>
              <span className="lang-text">{translate("lang")}: </span>
              <Icon href={`#${item[0]}`} size="icon-flag" />
            </span>
          );
        }
      })}
      <div className="lang-container">
        <button
          className="btn-lang"
          onClick={() => setLanguage(LOCALES.ENGLISH)}
        >
          English
        </button>
        <button
          className="btn-lang"
          onClick={() => setLanguage(LOCALES.UKRAINIAN)}
        >
          Українська
        </button>
        <button
          className="btn-lang"
          onClick={() => setLanguage(LOCALES.RUSSIAN)}
        >
          Русский
        </button>
      </div>
    </div>
  );
};

export default LangSwitcher;

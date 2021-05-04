import LangSwitcher from "../lang-switcher/lang-switcher.component";

const HeaderInfo = ({ time, phone }) => {
  return (
    <div className="header-info">
      <span className="header-info__hours">{time}</span>
      <a href={phone} className="header-info__phone">
        +38 098 586 6186
      </a>
      <LangSwitcher />
    </div>
  );
};

export default HeaderInfo;

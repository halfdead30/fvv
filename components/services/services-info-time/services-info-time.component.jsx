import translate from "../../../i18n/translate";

const ServicesInfoTime = ({ time }) => {
  return (
    <li className="services-info__link">
      <span>{translate("timePlaceholder")}</span>
      {time}
    </li>
  );
};

export default ServicesInfoTime;

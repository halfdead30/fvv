import translate from "../../../i18n/translate";

const ServicesInfoCost = ({ cost }) => {
  return (
    <li className="services-info__link">
      <span>{translate("costPlaceholder")}</span>
      {cost}
    </li>
  );
};

export default ServicesInfoCost;

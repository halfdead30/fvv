import ServicesInfoTime from "../services-info-time/services-info-time.component";
import ServicesInfoCost from "../services-info-cost/services-info-cost.component";
import ServicesBookingLink from "../services-booking-link/services-booking-link.component";
import translate from "../../../i18n/translate";

const ServicesInfo = ({ time, cost, url }) => {
  return (
    <ul className="services-info">
      <ServicesInfoTime time={translate(time)} />
      <ServicesInfoCost cost={translate(cost)} />
      <ServicesBookingLink url={url} />
    </ul>
  );
};

export default ServicesInfo;

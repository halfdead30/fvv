import servicesData from "./services.data";
import { SectionTitle } from "../section-title/section-title.component";
import ServicesDetailed from "./services-detailed/services-detailed.component";
import ServicesInfo from "./services-info/services-info.component";

const ServicesSection = () => {
  const services = servicesData;

  return (
    <section id="services" className="services">
      <SectionTitle title="Услуги" />

      {services.map((key, index) => {
        return (
          <div key={index} className="services-item">
            <ServicesDetailed
              spritePath={key.spritePath}
              title={`servicesData.${index}.title`}
              text={`servicesData.${index}.text`}
            />
            <ServicesInfo
              time={`servicesData.${index}.time`}
              cost={`servicesData.${index}.cost`}
              url={key.url}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ServicesSection;

import translate from "../../i18n/translate";
import { titles } from "./titles";

export const SectionTitle = ({ title }) => {
  const titleValue = title;

  return (
    <>
      {Object.keys(titles).map((key, index) => {
        if (titleValue === titles[key]) {
          return (
            <h3 key={index} className="section-title">
              {translate(`sectionTitle.${key}`)}
            </h3>
          );
        }
      })}
    </>
  );
};

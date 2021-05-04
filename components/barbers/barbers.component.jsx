import barbersData from "./barbers.data";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SectionTitle } from "../section-title/section-title.component";
import BarbersItem from "./barbers-item/barbers-item.component";

SwiperCore.use([Navigation]);

const BarbersSlider = () => {
  const barbersInfo = barbersData;

  return (
    <section id="barbers" className="barbers">
      <SectionTitle title="Барберы" />
      <Swiper
        slidesPerView={1}
        navigation
        preloadImages={false}
        lazy={{
          checkInViewOnLoad: true,
          loadPrevNext: true,
        }}
      >
        {barbersInfo.map(({ url, spritePath, imagePath }, index) => {
          return (
            <SwiperSlide key={index}>
              <BarbersItem
                name={`barbersData.${index}.name`}
                text={`barbersData.${index}.text`}
                url={url}
                spritePath={spritePath}
                imagePath={imagePath}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default BarbersSlider;

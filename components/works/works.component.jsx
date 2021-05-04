import { useEffect, useState } from "react";
import SwiperCore, { Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionTitle } from "../section-title/section-title.component";
import FsLightbox from "fslightbox-react";
import imagesPaths from "./images-paths";

SwiperCore.use([Navigation, Lazy]);

const WorksSection = () => {
  const [toggler, setToggler] = useState(false);
  const [...paths] = imagesPaths;
  const urls = paths.map((path) => path.url);

  return (
    <section id="works" className="works">
      <SectionTitle title="Наши работы" />
      <FsLightbox toggler={toggler} sources={urls} />
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          990: {
            slidesPerView: 3,
          },
        }}
        watchSlidesVisibility={true}
        preloadImages={false}
        lazy={{
          checkInViewOnLoad: true,
          loadPrevNext: true,
        }}
      >
        {paths.map(({ url }, index) => (
          <SwiperSlide key={index}>
            <img
              onClick={() => setToggler(!toggler)}
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-src={url}
              className="swiper-lazy"
              alt="Haircut work"
            />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WorksSection;

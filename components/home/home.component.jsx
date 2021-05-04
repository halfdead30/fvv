import Banner from "../banner/banner.component";
import PlayBtn from "../play-btn/play-btn.component";
import Mouse from "../mouse/mouse.component";

const HomeSection = () => {
  return (
    <section id="home">
      <Banner />
      <PlayBtn />
      <Mouse />
    </section>
  );
};

export default HomeSection;

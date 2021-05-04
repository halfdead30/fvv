import Header from "../components/header/header.component";
import HomeSection from "../components/home/home.component";
import BarbersSlider from "../components/barbers/barbers.component";
import WorksSection from "../components/works/works.component";
import ServicesSection from "../components/services/services.component";
import Map from "../components/map/map.component";
import Footer from "../components/footer/footer.component";

const App = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <BarbersSlider />
      <WorksSection />
      <ServicesSection />
      <Map />
      <Footer />
    </>
  );
};

export default App;

import BannerLink from "../banner-link/banner-link.component";
import BookBtn from "../book-btn/book-btn.component";

const BannerContact = () => {
  return (
    <div className="banner-contact">
      <BannerLink />
      <BookBtn
        className="ms_booking"
        dataUrl="https://n355262.yclients.com/?gcid=1848670012.1598547774"
      />
    </div>
  );
};

export default BannerContact;

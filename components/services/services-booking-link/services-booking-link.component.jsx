import React from "react";
import BookBtn from "../../book-btn/book-btn.component";

const ServicesBookingLink = ({ url }) => {
  return (
    <li className="services-info__link btn btn-book">
      <BookBtn className="ms_booking" dataUrl={url} />
    </li>
  );
};

export default ServicesBookingLink;

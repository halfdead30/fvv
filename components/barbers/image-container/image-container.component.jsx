const ImageContainer = ({ imagePath }) => {
  return (
    <div className="image-container">
      <div
        style={{ backgroundImage: `url(${imagePath})` }}
        className="barbers-img swiper-lazy"
      ></div>
    </div>
  );
};

export default ImageContainer;

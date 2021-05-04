import ImageContainer from "../image-container/image-container.component";
import BarbersText from "../barbers-text/barbers-text.component";

const BarbersItem = ({ name, text, url, spritePath, imagePath }) => {
  return (
    <div className="barbers-item">
      <ImageContainer imagePath={imagePath} />
      <BarbersText name={name} text={text} url={url} spritePath={spritePath} />
    </div>
  );
};

export default BarbersItem;

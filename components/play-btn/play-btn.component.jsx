import { useState } from "react";
import FsLightbox from "fslightbox-react";

const PlayBtn = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <button className="playBtn" onClick={() => setToggler(!toggler)}></button>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=yRpOBeIZ5rY"]}
      />
    </>
  );
};

export default PlayBtn;

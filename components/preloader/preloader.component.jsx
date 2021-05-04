import { useRef, useState } from "react";
import { useHandlePreload } from "../../hooks";
import { ReactComponent as Logo } from "../../logo.svg";

import "./preloader.styles.scss";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  const node = useRef(null);
  useHandlePreload(node, () => setLoaded(true));

  return (
    <div className={loaded ? "preloader page-loaded" : "preloader"} ref={node}>
      <Logo id="logo" height="65mm" width="122mm" />
    </div>
  );
};

export default Preloader;

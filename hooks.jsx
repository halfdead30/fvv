import { useState, useRef, useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};

export const useHandleScroll = () => {
  const prevScrollY = useRef(80);
  const [goingUp, setGoingUp] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (prevScrollY.current > currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current < currentScrollY && !goingUp) {
      setGoingUp(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return goingUp;
};

export const useHandlePreload = (ref, handler) => {
  const handlePreload = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        const logo = ref.current.children[0];
        const [...logoChildren] = logo.querySelectorAll("path");

        logoChildren.forEach((item) => {
          item.id === "third"
            ? item.classList.add("slide-path")
            : item.classList.add("fill-path");
        });
      }, 500);

      resolve(
        setTimeout(() => {
          handler();
          document.documentElement.style.overflow = "visible";
        }, 3500)
      );
    });
  };

  useEffect(() => {
    window.addEventListener("load", handlePreload);
    return () => window.removeEventListener("load", useHandlePreload);
  }, [ref, handler]);
};

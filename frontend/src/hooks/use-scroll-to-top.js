import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export const useScrollToTop = () => {
  const isFirstRender = useRef(true);
  const { pathname } = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollToTop();
  }, [pathname]);

  return { scrollToTop };
};

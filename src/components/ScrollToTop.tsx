
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Make sure we're scrolling to top without affecting visibility
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

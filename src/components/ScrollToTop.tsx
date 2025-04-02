
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Simple scroll to top without any side effects
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

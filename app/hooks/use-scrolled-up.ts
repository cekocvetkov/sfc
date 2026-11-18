import { useEffect, useState } from "react";

/**
 * Tells whether the reader is scrolling back up the page, past a given depth.
 * Used to slide in a compact navigation bar once the main nav has scrolled away.
 */
export default function useScrolledUp(minDepth = 300) {
  const [scrolledUp, setScrolledUp] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y === lastY) return;
      setScrolledUp(y < lastY && y > minDepth);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [minDepth]);

  return scrolledUp;
}

import { useState, useEffect } from "react";

export default function useIsWindowWidthLowerThan(isLowerThan: number) {
  const [isWindowWidthLower, setIsWindowWidthLower] = useState(
    window.innerWidth < isLowerThan,
  );

  useEffect(() => {
    const onResize = () => {
      setIsWindowWidthLower(window.innerWidth < isLowerThan);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return isWindowWidthLower;
}

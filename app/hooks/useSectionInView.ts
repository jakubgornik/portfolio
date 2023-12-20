import { useActiveSectionContext } from "../context/ActiveContextSection";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionNames } from "../utils/data";

export function useSectionInView(sectionName: SectionNames, threshold = 0.6) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 500) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

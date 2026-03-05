import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionNames } from "../utils/data";
import { useActiveSectionContext } from "../context/active-section-context";

export function useSectionInView(sectionName: SectionNames, threshold = 0.4) {
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

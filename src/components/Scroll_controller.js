"use client";

import { useState, useEffect } from "react";
import Arrow from "./ui/arrow";

export default function ScrollControls({ targetId }) {
  const [tooltipText, setTooltipText] = useState("");
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(document.getElementById(targetId));
  }, [targetId]);

  if (!container) return null;

  const slideWidth = () => container.clientWidth;
  const maxScroll = () => container.scrollWidth - slideWidth() + 1;

  const handlePrev = () => {
    let target = container.scrollLeft - slideWidth();
    if (target < -1) target = maxScroll();
    container.scrollTo({ left: target, behavior: "smooth" });
  };
  const handleNext = () => {
    let target = container.scrollLeft + slideWidth();
    if (target > maxScroll()) target = 0;
    container.scrollTo({ left: target, behavior: "smooth" });
  };
  const getPrevTooltip = () => {
    let t = container.scrollLeft - slideWidth();
    return t < slideWidth() - 1 && t > -1 ? "Profil" : "Voir mes projets";
  };
  const getNextTooltip = () => {
    let t = container.scrollLeft + slideWidth();
    return t > maxScroll() ? "Profil" : "Voir mes projets";
  };
  const goToProfile = () => {
    container.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <Arrow
      handlePrev={handlePrev}
      handleNext={handleNext}
      getPrevTooltipText={getPrevTooltip}
      getNextTooltipText={getNextTooltip}
      tooltipText={tooltipText}
      setTooltipText={setTooltipText}
      goToProfile={goToProfile}    // in case you want to expose it here too
    />
  );
}

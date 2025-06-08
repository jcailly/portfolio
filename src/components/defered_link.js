"use client";

import { useEffect } from "react";

export default function DeferredLink({ href }) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.media = "print";              // non-blocking
    link.onload = () => {
      link.media = "all";              // apply once loaded
    };
    document.head.appendChild(link);
  }, [href]);

  return null;
}

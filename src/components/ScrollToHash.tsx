import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

// 用來捲動到 hash 的元件
const ScrollToHash = () => {
  const location = useLocation();
  const hashElementId = useMemo(() => location.hash? location.hash.substring(1) : null, [location.hash]);

  const hashElement = useMemo(() => {
    return hashElementId? document.getElementById(hashElementId) : null;
  }, [hashElementId]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHash;
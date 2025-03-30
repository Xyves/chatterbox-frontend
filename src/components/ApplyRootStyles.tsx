import { useEffect } from "react";
import { useColorMode } from "./ui/color-mode";

export const ApplyRootStyles = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.backgroundColor = colorMode === "dark" ? "#313c52" : "#e0e0e0";
      root.style.transition = "background-color 0.3s ease-in-out";
    }
  }, [colorMode]);
  return null;
};

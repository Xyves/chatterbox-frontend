import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "./store";
import { useEffect } from "react";
export function useOutsideClick(ref, handler) {
  useEffect(() => {
    console.log("wow");
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, handler]);
}
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

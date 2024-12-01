import { useEventListener } from "./useEventListener";
import { RefObject, useEffect } from "react";

const useClickOutside = (
  modalRef: RefObject<HTMLElement | undefined>,
  callback: () => void,
) => {
  const handleClick = (event: MouseEvent) => {
    if (
      !modalRef.current ||
      !modalRef.current.contains(event.target as HTMLElement)
    ) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // useEventListener("click", (e) => {
  //   if (!modalRef?.current || !modalRef.current.contains(e.target as Node)) {
  //     return callback();
  //   }
  // });
};

export { useClickOutside };

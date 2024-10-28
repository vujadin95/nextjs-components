import { useEventListener } from "./useEventListener";
import { RefObject } from "react";

const useClickOutside = (
  modalRef: RefObject<HTMLElement>,
  callback: () => void
) => {
  useEventListener("click", (e) => {
    if (!modalRef?.current || !modalRef.current.contains(e.target as Node)) {
      return callback();
    }
  });
};

export { useClickOutside };

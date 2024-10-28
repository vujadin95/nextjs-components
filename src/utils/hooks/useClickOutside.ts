import { useEventListener } from "./useEventListener";

const useClickOutside = (modalRef: any, callback: () => void) => {
  useEventListener("click", (e) => {
    if (!modalRef == null || !modalRef.current.contains(e.target))
      return callback();
  });
};

export { useClickOutside };

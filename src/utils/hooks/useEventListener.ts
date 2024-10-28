import { useEffect, useRef } from "react";

const useEventListener = (eventType: string, handler: (e: Event) => void) => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    function internalHandler(e: Event) {
      return handlerRef.current(e);
    }
    document.addEventListener(eventType, internalHandler);

    return () => {
      document.removeEventListener(eventType, internalHandler);
    };
  }, [eventType]);
};

export { useEventListener };

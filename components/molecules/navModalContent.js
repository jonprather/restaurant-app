import React, { useCallback, useEffect, useRef } from "react";

export const Content = ({ onClose, children }) => {
  const ref = useRef(null);
  const escapeListener = useCallback((e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }, []);
  const clickListener = useCallback(
    (e) => {
      if (!ref.current.contains(e.target)) {
        //if the click is not inside the ref close the modal via state change
        onClose?.(); // using optional chaining here, change to onClose && onClose(), if required
        //   if (!(ref.current!).contains(e.target)) {
        //
      }
    },
    [ref.current]
  );

  useEffect(() => {
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);
    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  }, []);
  return (
    <div className='relative' ref={ref}>
      {children}
    </div>
  );
};

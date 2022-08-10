import { useEffect, useState } from "react";

function Modal(content: any) {
  // const [state, setState] = useState(true);

  // const closeOnEscapeKeyDown = (e: any) => {
  //   if ((e.charCode || e.keyCode) === 27) {
  //     setState(false);
  //   }
  // };

  // useEffect(() => {
  //   document.body.addEventListener("keydown", closeOnEscapeKeyDown);
  //   return function cleanup() {
  //     document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
  //   };
  // }, []);

  // if (!state) {
  //   return null;
  // }

  return (
    <div className="modalBackground">
      <div className="modalContent">{content}</div>
    </div>
  );
}

export default Modal;

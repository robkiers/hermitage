import { useRef, useEffect } from "react";

const useCanvas = (draw, options = {}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext(options.context || "2d");
    
    console.log("bounding", canvas.getBoundingClientRect());

    draw(context);

  }, [draw]);

  
  // canvas.addEventListener('mousemove', onPointerMove)
//   function onPointerMove(e)
// {
//     if (isDragging)
//     {
//         cameraOffset.x = getEventLocation(e).x/cameraZoom - dragStart.x
//         cameraOffset.y = getEventLocation(e).y/cameraZoom - dragStart.y
//     }
// }



  return canvasRef;
};

export default useCanvas;

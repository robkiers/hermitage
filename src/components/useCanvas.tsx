import { useRef, useEffect } from "react";

const useCanvas = (draw: any, options = {}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    draw(context);
  }, [draw]);

  return canvasRef;
};

export default useCanvas;

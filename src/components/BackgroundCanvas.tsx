import React from "react";
import useCanvas from "./useCanvas";

const BackgroundCanvas = (props: any) => {
  const { draw, options, ...rest } = props;
  const canvasRef = useCanvas(draw, options);

  // function clearBackground(context: CanvasRenderingContext2D) {
  //   const { width, height } = context.canvas;
  //   context.clearRect(0, 0, width, height);
  // }
  
  //   const { context, ...moreConfig } = options;
  //   return <canvas ref={canvasRef} {...rest} />;

  // const { draw, ...rest } = props;
  // const canvasRef = useCanvas(draw);

  //   return <canvas width="1580" height="789" ref={canvasRef} {...rest} />;

  // console.log("width", window.innerWidth);
  // console.log("width", window.innerWidth / 1580);

  // mouseMove = {

  // }
  // onMouseMove={mouseMove}

  const width = window.innerWidth;
  const height = window.innerHeight;

  // const pos = windowToCanvas(canvas, clientX, clientY);
  // canvas.style.cursor = 'move';
  // setMouseDownFlag(true); //  The control only performs MouseMove when the mouse is pressed
  // setMouseDownPos({
  //   x: pos.x,
  //   y: pos.y,
  // });

  // canvas.addEventListener('mousemove', onPointerMove)
  // console.log("e", draw);

  return (
    <canvas
      className="canvasBackground"
      width={width}
      height={height}
      ref={canvasRef}
      {...rest}
    />
  );
};

export default BackgroundCanvas;

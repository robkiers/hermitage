import React from "react";
import useCanvas from "./useCanvas";

const BackgroundCanvas = (props) => {
  const { draw, options, ...rest } = props;
  const canvasRef = useCanvas(draw, options);


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
  // setMouseDowmFlag(true); //  The control only performs MouseMove when the mouse is pressed
  // setMouseDowmPos({
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

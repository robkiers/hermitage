import { useEffect, useState } from "react";
import BackgroundCanvas from "../components/BackgroundCanvas";




// function drawFunc(ctx: CanvasRenderingContext2D) {
//   console.log("draw");
//   const windowWith = window.innerWidth || 1580;
//   const windowHeight = window.innerHeight || 789;
//   const ratio = (windowWith / 1580) * 1.08;

//   // ctx.drawImage()
//   ctx.fillStyle = "#261c01";
//   ctx.fillRect(0, 0, windowWith, windowHeight);
// }

function Commons() {
  return (
    <div className="commonsDisplay">
      {/* <BackgroundCanvas draw={drawFunc}></BackgroundCanvas> */}
    </div>
  );
}

export default Commons;

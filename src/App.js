import "./App.scss";
import Navbar from "./layouts/Navbar.js";
import BackgroundCanvas from "./components/BackgroundCanvas";
import img01 from "./assets/layer01.png";
import img02 from "./assets/layer02.png";
import img03 from "./assets/layer03.png";
import img04 from "./assets/layer04.png";
import img05 from "./assets/layer05.png";
import img06 from "./assets/layer06.png";
import img07 from "./assets/layer07.png";
import React from "react";
import { useEffect, useState } from 'react'
import { fromEvent } from 'rxjs'
import { map, throttleTime } from 'rxjs/operators'

import useMousePosition from "./components/useMousePosition"

function useMouseCoordinates() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  useEffect(() => {
    console.log("effect fired");
    const sub = fromEvent(document, "mousemove")
      .pipe(
        throttleTime(25),
        map(event => [event.clientX, event.clientY])
      )
      .subscribe(([newX, newY]) => {
        setX(newX);
        setY(newY);
      });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return {
    mouseX: x,
    mouseY: y
  };
}


export default function App() {
  const { mouseX, mouseY } = useMouseCoordinates();
    console.log('mouse', mouseX, mouseY);

  // const [mouseMoving] = React.useState(false);

  // React.useEffect(() => {
  //   if (isCardMoving) window.addEventListener('mousemove', handleCardMove);
  //   else window.removeEventListener('mousemove', handleCardMove);
  // }, [isCardMoving]);

  // const handleCardMove = (event) => console.log({ x: event.offsetX, y: event.offsetY });


  const imgLib = [
    { id: "img07", src: img07, locationX: 0, locationY: 0 },
    { id: "img06", src: img06, locationX: 0, locationY: 0 },
    { id: "img05", src: img05, locationX: 0, locationY: 0 },
    { id: "img04", src: img04, locationX: 0, locationY: 0 },
    { id: "img03", src: img03, locationX: 0, locationY: 0 },
    { id: "img02", src: img02, locationX: 0, locationY: 0 },
    { id: "img01", src: img01, locationX: 0, locationY: 0 },
  ];

  const draw = (ctx) => {
    console.log("draw");

    const windowWith = window.innerWidth || 1580;
    const windowHeight = window.innerWidth || 789;
    const ratio = (windowWith / 1580) * 1.05;
    
    // center the image
    const adjustX = (windowWith * 1.05 - windowWith) / 2;
    const tre = (((windowWith/2 + ratio ) - mouseX) / 20 );
    console.log('adjustX', adjustX);
    // mouseX / 2


    // const halfWidth = width / 2;
    // const halfHeight = height / 2;
    // const euclidianX = mouseX - halfWidth;
    // const euclidianY = halfHeight - mouseY;

    // https://codepen.io/unicodeveloper/pen/LzNQYG
    // https://stackoverflow.com/questions/34597160/html-canvas-mouse-position-after-scale-and-translate
    
    ctx.clearRect(0, 0, windowWith, windowHeight);

    imgLib.forEach((img) => {
      const image = new Image();
      image.src = img.src;

      image.onload = () => {
        ctx.drawImage(
          image,
          tre,
          0,
          1580,
          789,
          0,
          0,
          1580 * ratio,
          789 * ratio
        );

        // ctx.drawImage(img, 0,0, img.width, img.height, 0,0,img.width*ratio, img.height*ratio);
      };
    });

    console.log("ctx", ctx);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <BackgroundCanvas draw={draw}></BackgroundCanvas>
    </div>
  );
}

// export default function App() {
//   function getWindowWidth() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height,
//     };
//   }

//   // const screenWidth = getWindowWidth();

//   function handleClick(e) {
//     console.log("click", zoomedIn);

//     // let zoom = 0;
//     if (zoomedIn === 0) {
//       setZoomstate(1);
//       setTimeout(() => {
//         setZoomstate(2);
//       }, 1000);
//     } else if (zoomedIn === 1) {
//       setZoomstate(2);
//     } else if (zoomedIn === 2) {
//       setZoomstate(3);
//       setTimeout(() => {
//         setZoomstate(0);
//       }, 1000);
//     } else if (zoomedIn === 3) {
//       setZoomstate(0);
//     }
//   }

//   const [xOffset, setXOffset] = useState(0);
//   const [yOffset, setYOffset] = useState(0);
//   const [zoomedIn, setZoomstate] = useState(0);

//   useEffect(() => {
//     const screenSize = getWindowWidth();

//     function handleMouseMovement(e) {
//       let positionX = e.pageX - screenSize.width / 2;
//       let positionY = e.pageY - screenSize.height / 2;

//       setXOffset(positionX / 10);
//       setYOffset(positionY / 10);
//     }

//     window.addEventListener("mousemove", handleMouseMovement);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMovement);
//     };
//   }, [xOffset, yOffset, zoomedIn]);

//   function setStyle(props, id) {
//     let xPosition = xOffset;
//     let yPosition = yOffset;

//     if (zoomedIn === 1 || zoomedIn === 2) {
//       if (id === "ruins") {
//         xPosition = xPosition - 200;
//         yPosition = yPosition + 100;
//       } else if (id === "commons") {
//         xPosition = xPosition + 1100;
//       } else if (id === "temple") {
//         xPosition = xPosition + 3000;
//         yPosition = yPosition - 1000;
//       }
//     }

//     let style;

//     if (zoomedIn === 1) {
//       style = {
//         filter: 'blur(2px)',
//         transition: "transform 1s linear, filter 1s ease-in-out",
//         transform: `translate(${xPosition * props}px, ${
//           yPosition * props
//         }px) scale(2)`,
//       };
//     } else if (zoomedIn === 2) {
//       style = {
//         transform: `translate(${xPosition * props}px, ${
//           yPosition * props
//         }px) scale(2)`,
//       };
//     } else if (zoomedIn === 3) {
//       style = {
//         filter: 'blur(2px)',
//         transition: "transform 1s linear, filter 1s ease-in-out",
//         transform: `translate(${xPosition * props}px, ${yPosition * props}px)`,
//       };
//     } else {
//       style = {
//         transform: `translate(${xPosition * props}px, ${yPosition * props}px)`,
//       };
//     }
//     return style;
//   }

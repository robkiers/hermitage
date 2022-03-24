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
import { fromEvent } from "rxjs";
import { map, throttleTime } from "rxjs/operators";

import { useEffect, useRef, useState } from "react";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

function UseMouseCoordinates() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("effect fired");
    const sub = fromEvent(document, "mousemove")
      .pipe(
        throttleTime(50),
        map((event) => [event.clientX, event.clientY])
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
    mouseY: y,
  };
}

function App() {
  const canvasRef = useRef(null);
  const cursorPosition = UseMouseCoordinates();
  // const animationFrameRequestRef = useRef(null);

  const [enrichedLib, setEnrichedLib] = useState([]);
  const [zoomState, setZoomState] = useState("zoomDefault");

  useEffect(() => {
    loadImages().then((lib) => {
      setEnrichedLib(lib);
    });
  }, []);

  // useEffect(() => {
  //   console.log("useEffect", loaded);
  //   if (!loaded) {
  //     return
  //   }
  //   renderFrame();
  //   animationFrameRequestRef.current = requestAnimationFrame(renderFrame);
  //   return () => {
  //     if (animationFrameRequestRef.current != null) {
  //       cancelAnimationFrame(animationFrameRequestRef.current);
  //     }
  //   };
  // }, [cursorPosition]);

  const imgLib = [
    {
      id: "img07",
      src: img07,
      adjustX: 0,
      adjustY: 0,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 125, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img06",
      src: img06,
      adjustX: 0.1,
      adjustY: 0.1,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350 },
      zoomOak: { x: 125, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img05",
      src: img05,
      adjustX: 0.3,
      adjustY: 0.3,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 125, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img04",
      src: img04,
      adjustX: 0.4,
      adjustY: 0.4,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 125, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img03",
      src: img03,
      adjustX: 0.5,
      adjustY: 0.5,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 125, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img02",
      src: img02,
      adjustX: 1,
      adjustY: 1,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 125, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img01",
      src: img01,
      adjustX: 1,
      adjustY: 1,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 125, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
  ];

  async function loadImages() {
    const enrichedLib = await Promise.all(
      imgLib.map(async (img) => {
        const image = new Image();
        await new Promise((r) => (image.onload = r), (image.src = img.src));
        img.image = image;
        return img;
      })
    );
    return enrichedLib;
  }

  // function renderFrame() {
  //   const context = canvasRef.current?.getContext("2d");
  //   if (context != null) {
  //     console.log("renderFrame", cursorPosition);

  //     drawFunc(context, cursorPosition.mouseX, cursorPosition.mouseY);
  //   }
  // }

  function clearBackground(context) {
    const { width, height } = context.canvas;
    context.clearRect(0, 0, width, height);
  }

  function zoom() {
    console.log("test");
    if (zoomState === "zoomOak") {
      setZoomState("zoomDefault");
    } else {
      setZoomState("zoomOak");
    }
  }

  function drawFunc(ctx) {
    clearBackground(ctx);
    const windowWith = window.innerWidth || 1580;
    const windowHeight = window.windowHeight || 789;
    const ratio = (windowWith / 1580) * 1.08;

    const centerX = (windowWith * 1.075 - windowWith) / 4;
    const moveModX = (1580 * ratio - windowWith) / windowWith / 2;
    const moveX = (centerX + cursorPosition.mouseX) * moveModX;

    const centerY = (windowHeight * 1.075 - windowHeight) / 4;
    const moveModY = (789 * ratio - windowHeight) / windowHeight / 2;

    const moveY = (centerY + cursorPosition.mouseY) * moveModX;

    const zoomLocation = zoomState;
    // https://codepen.io/unicodeveloper/pen/LzNQYG
    // https://stackoverflow.com/questions/34597160/html-canvas-mouse-position-after-scale-and-translate
    // https://medium.com/@rteammco/smooth-animations-for-interactive-html-canvas-simulations-with-react-b6fc1109ecd7

    enrichedLib.forEach((img) => {
      const zoomX = img[zoomLocation].x || 1;
      const zoomY = img[zoomLocation].y || 1;
      const zoom = img[zoomLocation].zoom || 1;

      ctx.drawImage(
        img.image,
        zoomX + moveX * img.adjustX,
        zoomY + moveY * img.adjustX,
        1580,
        789,
        0,
        0,
        1580 * ratio * zoom,
        789 * ratio * zoom
      );
    });
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <BackgroundCanvas draw={drawFunc} onClick={zoom}></BackgroundCanvas>
    </div>
  );
}

export default App;

// _________________________

// export default function App() {
//   function getWindowWidth() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height,
//     };
//   }

//   function handleClick(e) {

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

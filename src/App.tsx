import "./App.scss";
import { useEffect, useState } from "react";

import Header from "./layouts/Header";
import BeautifyUI from "./layouts/BeautifyUI";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Oak from "./pages/oak";
import Commons from "./pages/commons";
import useMousePosition from "./components/useMousePosition";
import Background from "./components/background/Background";
export interface imageZoom {
  x: number;
  y: number;
  zoom: number;
}

export interface imagePart {
  id: string;
  desc: string;
  src: string;
  image: HTMLImageElement;
  adjustX: number;
  adjustY: number;
  zoomDefault: imageZoom;
  zoomCommons: imageZoom;
  zoomOak: imageZoom;
  zoomTemple: imageZoom;
  zoomArlien: imageZoom;
}

function App() {
  const cursorPosition = useMousePosition();

  // const [enrichedLib, setEnrichedLib] = useState<imagePart[]>();
  const [zoomLocation, setZoomLocation] = useState({
    current: "zoomDefault",
    previous: "zoomDefault",
    date: 0,
  });
  // const [zoomPercentage, setZoomPercentage] = useState(0);


  const [showUI, setShowUI] = useState(true);

  const runTime = 750;

  // useEffect(() => {
  //   loadImages().then((lib) => {
  //     setEnrichedLib(lib);
  //   });
  // }, []);

  // useEffect(() => {
  //   const currentTime = Date.now();
  //   const animationEndTime = zoomLocation.date + runTime;

  //   if (zoomPercentage < 1) {
  //     const timerId = setTimeout(() => {
  //       updateZoom(animationEndTime, currentTime);
  //     }, runTime / 30);
  //     return () => clearTimeout(timerId);
  //   }
  // });

  // function updateZoom(animationEndTime: number, currentTime: number) {
  //   const delta = animationEndTime - currentTime;
  //   const percentComplete = (runTime - delta) / runTime;
  //   setZoomPercentage(percentComplete > 1 ? 1 : percentComplete);
  // }

  // const imgLib01 = [
  //   {
  //     id: "img07",
  //     desc: "moon",
  //     src: img07,
  //     adjustX: 0,
  //     adjustY: 0,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 750, y: 350, zoom: 1.75 },
  //     zoomOak: { x: 125, y: 250, zoom: 1.5 },
  //     zoomTemple: { x: 750, y: 20, zoom: 1.75 },
  //     zoomArlien: { x: -10, y: 325, zoom: 2.25 },
  //   },
  //   {
  //     id: "img06",
  //     desc: "hyjal",
  //     src: img06,
  //     adjustX: 0.1,
  //     adjustY: 0.1,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 750, y: 350, zoom: 1.75 },
  //     zoomOak: { x: 125, y: 250, zoom: 1.5 },
  //     zoomTemple: { x: 750, y: 20, zoom: 1.75 },
  //     zoomArlien: { x: -10, y: 325, zoom: 2.25 },
  //   },
  //   {
  //     id: "img05",
  //     desc: "hills",
  //     src: img05,
  //     adjustX: 0.3,
  //     adjustY: 0.3,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 750, y: 350, zoom: 1.75 },
  //     zoomOak: { x: -20, y: 300, zoom: 1.6 },
  //     zoomTemple: { x: 750, y: 20, zoom: 1.75 },
  //     zoomArlien: { x: 50, y: 325, zoom: 2.5 },
  //   },
  //   {
  //     id: "img04",
  //     desc: "tree",
  //     src: img04,
  //     adjustX: 0.4,
  //     adjustY: 0.4,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 750, y: 350, zoom: 1.75 },
  //     zoomOak: { x: -100, y: 250, zoom: 1.5 },
  //     zoomTemple: { x: 750, y: 20, zoom: 1.75 },
  //     zoomArlien: { x: -10, y: 325, zoom: 2.25 },
  //   },
  //   {
  //     id: "img03",
  //     desc: "temple",
  //     src: img03,
  //     adjustX: 0.5,
  //     adjustY: 0.5,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 750, y: 350, zoom: 1.75 },
  //     zoomOak: { x: -75, y: 250, zoom: 1.5 },
  //     zoomTemple: { x: 750, y: 20, zoom: 1.75 },
  //     zoomArlien: { x: -10, y: 325, zoom: 2.25 },
  //   },
  //   {
  //     id: "img02",
  //     desc: "commons",
  //     src: img02,
  //     adjustX: 1,
  //     adjustY: 1,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 750, y: 350, zoom: 1.75 },
  //     zoomOak: { x: -150, y: 250, zoom: 1.5 },
  //     zoomTemple: { x: 750, y: 20, zoom: 1.75 },
  //     zoomArlien: { x: -10, y: 325, zoom: 2.25 },
  //   },
  //   {
  //     id: "img01",
  //     desc: "tower",
  //     src: img01,
  //     adjustX: 1,
  //     adjustY: 1,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 750, y: 350, zoom: 1.75 },
  //     zoomOak: { x: 150, y: 200, zoom: 1.5 },
  //     zoomTemple: { x: 750, y: 20, zoom: 1.75 },
  //     zoomArlien: { x: -10, y: 325, zoom: 2.25 },
  //   },
  // ];
  // const imgLib = [
  //   {
  //     id: "img05",
  //     desc: "background",
  //     src: img15,
  //     adjustX: 0.3,
  //     adjustY: 0.3,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 0.5, y: -0.2, zoom: 1.6 },
  //     zoomOak: { x: 0, y: -0.5, zoom: 1.5 },
  //     zoomTemple: { x: 0.5, y: -0.1, zoom: 1.75 },
  //     zoomArlien: { x: 50, y: 325, zoom: 2.5 },
  //   },
  //   {
  //     id: "img04",
  //     desc: "valley",
  //     src: img14,
  //     adjustX: 0.4,
  //     adjustY: 0.4,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 0.75, y: -0.6, zoom: 1.75 },
  //     zoomOak: { x: -0.15, y: -0.5, zoom: 1.5 },
  //     zoomTemple: { x: 0.75, y: 0.15, zoom: 1.75 },
  //     zoomArlien: { x: -10, y: 325, zoom: 2.25 },
  //   },
  //   {
  //     id: "img03",
  //     desc: "temple",
  //     src: img13,
  //     adjustX: 0.5,
  //     adjustY: 0.5,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 0.8, y: -0.8, zoom: 1.75 },
  //     zoomOak: { x: -0, y: -0.7, zoom: 1.7 },
  //     zoomTemple: { x: 0.8, y: 0.05, zoom: 1.75 },
  //     zoomArlien: { x: -10, y: 325, zoom: 2.25 },
  //   },
  //   {
  //     id: "img02",
  //     desc: "commons",
  //     src: img12,
  //     adjustX: 1,
  //     adjustY: 1,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 0.75, y: -0.85, zoom: 1.75 },
  //     zoomOak: { x: -0, y: -0.75, zoom: 1.75 },
  //     zoomTemple: { x: 0.6, y: 0.2, zoom: 1.6 },
  //     zoomArlien: { x: -10, y: 325, zoom: 2.25 },
  //   },
  //   {
  //     id: "img01",
  //     desc: "tower",
  //     src: img11,
  //     adjustX: 1,
  //     adjustY: 1,
  //     zoomDefault: { x: 0, y: 0, zoom: 1 },
  //     zoomCommons: { x: 0.75, y: -0.9, zoom: 1.75 },
  //     zoomOak: { x: 0, y: -0.25, zoom: 1.5 },
  //     zoomTemple: { x: 0.75, y: 0.1, zoom: 1.4 },
  //     zoomArlien: { x: -10, y: 325, zoom: 2.25 },
  //   },
  // ];

  // async function loadImages() {
  //   const enrichedLib: imagePart[] = await Promise.all(
  //     imgLib.map(async (img) => {
  //       const temp = img as imagePart;
  //       const image = new Image();
  //       image.src = img.src;
  //       await new Promise((r) => (image.onload = r));
  //       temp.image = image;
  //       return temp as imagePart;
  //     })
  //   );
  //   return enrichedLib;
  // }

  function zoom(prop: string) {
    if (prop !== zoomLocation.current) {
      const timed = Date.now();
      // setZoomPercentage(0);
      setZoomLocation({
        current: prop,
        previous: zoomLocation.current,
        date: timed,
      });
    }
  }

  // function clearBackground(context: CanvasRenderingContext2D) {
  //   const { width, height } = context.canvas;
  //   context.clearRect(0, 0, width, height);
  // }

  // function move(img: imagePart, attribute: string) {
  //   const newPosition = (
  //     img[zoomLocation.current as keyof imagePart] as imageZoom
  //   )[attribute as keyof imageZoom];
  //   const oldPosition = (
  //     img[zoomLocation.previous as keyof imagePart] as imageZoom
  //   )[attribute as keyof imageZoom];

  //   const distance = (newPosition - oldPosition) * zoomPercentage;

  //   return oldPosition + distance;
  // }

  // function drawFunc(ctx: CanvasRenderingContext2D) {
  //   clearBackground(ctx);
  //   const imgWidth = 1580;
  //   // 6007/1580
  //   const imgHeight = 789;
  //   // 3000/789

  //   const windowWith = window.innerWidth || 1580;
  //   const windowHeight = window.innerHeight || 789;

  //   const adjustedImageWidth = windowWith + windowWith / 10;
  //   const moveX = -cursorPosition.mouseX / 10;

  //   const ratio = adjustedImageWidth / imgWidth;

  //   const adjustedImageHeight = imgHeight * ratio;
  //   const centerY = windowHeight - adjustedImageHeight;
  //   const movePercent = centerY / windowHeight;
  //   const moveY = cursorPosition.mouseY * movePercent;

  //   // https://codepen.io/unicodeveloper/pen/LzNQYG
  //   // https://stackoverflow.com/questions/34597160/html-canvas-mouse-position-after-scale-and-translate
  //   // https://medium.com/@rteammco/smooth-animations-for-interactive-html-canvas-simulations-with-react-b6fc1109ecd7
  //   enrichedLib?.forEach((img) => {
  //     ctx.drawImage(
  //       img.image,
  //       -(move(img, "x") * windowWith) + moveX * img.adjustX,
  //       move(img, "y") * windowHeight + moveY * img.adjustY,
  //       adjustedImageWidth * move(img, "zoom"),
  //       adjustedImageHeight * move(img, "zoom")
  //     );
  //   });
  // }

  function toggleUI() {
    setShowUI(!showUI);
  }

  return (
    <div className="App">
      {showUI ? <Header zoom={zoom}></Header> : null}
      {showUI && zoomLocation.current === "zoomOak" ? <Oak></Oak> : null}
      <BeautifyUI toggleUI={toggleUI} showUI={showUI}></BeautifyUI>
      <Background zoom={zoom} zoomLocation={[zoomLocation, Date.now()]}></Background>
    </div>
  );
}

export default App;

// {showUI &&  zoomLocation.current === "zoomCommons" ? <Commons></Commons> : null}
// <BackgroundCanvas
//   draw={drawFunc}
//   onClick={() => zoom("zoomDefault")}
// ></BackgroundCanvas>
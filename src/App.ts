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

import { useEffect, useState } from "react";

function UseMouseCoordinates() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("effect fired");
    const sub = fromEvent(document, "mousemove")
      .pipe(
        throttleTime(50),
        map((event: MouseEvent) => [event.clientX, event.clientY])
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
  const cursorPosition = UseMouseCoordinates();
  // const animationFrameRequestRef = useRef(null);

  const [enrichedLib, setEnrichedLib] = useState([]);
  const [zoomState, setZoomState] = useState({
    current: "zoomDefault",
    previous: "zoomDefault",
    date: null,
  });

  const [zooming, setZoomingState] = useState(1);
  // const zooming = 0;
  // const [count, setCount] = useState(0)
  // const requestRef = useRef();
  // const previousTimeRef = useRef();

  useEffect(() => {
    loadImages().then((lib) => {
      setEnrichedLib(lib);
    });
  }, []);

  useEffect(() => {
    if (zooming <= 30) {
      // console.log("zoom", zooming);
      const timerId = setTimeout(() => {
        setZoomingState(zooming + 1);
      }, 1000 / 30);
      return () => clearTimeout(timerId);
    }
  });

  // const animate = time => {
  //   if (previousTimeRef.current !== undefined) {
  //     const deltaTime = time - previousTimeRef.current;
  //     console.log('time', time);
  //     // Pass on a function to the setter of the state
  //     // to make sure we always have the latest state
  //     setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
  //   }
  //   previousTimeRef.current = time;
  //   requestRef.current = requestAnimationFrame(animate);
  // }

  // useEffect(() => {
  //   requestRef.current = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(requestRef.current);
  // }, []);

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
      desc: "moon",
      src: img07,
      image: null,
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
      desc: "hyjal",
      src: img06,
      image: null,
      adjustX: 0.1,
      adjustY: 0.1,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 125, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img05",
      desc: "hills",
      src: img05,
      image: null,
      adjustX: 0.3,
      adjustY: 0.3,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 125, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: 50, y: 325, zoom: 2.5 },
    },
    {
      id: "img04",
      desc: "tree",
      src: img04,
      image: null,
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
      desc: "temple",
      src: img03,
      image: null,
      adjustX: 0.5,
      adjustY: 0.5,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 75, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img02",
      desc: "commons",
      src: img02,
      image: null,
      adjustX: 1,
      adjustY: 1,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 25, y: 250, zoom: 1.5 },
      zoomTemple: { x: 750, y: 20, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img01",
      desc: "tower",
      src: img01,
      image: null,
      adjustX: 1,
      adjustY: 1,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 750, y: 350, zoom: 1.75 },
      zoomOak: { x: 225, y: 200, zoom: 1.5 },
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

  function zoom(prop) {
    // console.log("test", prop);
    // const current = zoomState.current;
    const timed = Date.now();
    setZoomState({ current: prop, previous: zoomState.current, date: timed });
    // console.log("test 2", timed);

    setZoomingState(1);
  }

  function clearBackground(context) {
    const { width, height } = context.canvas;
    context.clearRect(0, 0, width, height);
  }

  function move(img, atribute) {
    // console.log('zoomState', zoomState);
    const distance =
      (img[zoomState.current][atribute] - img[zoomState.previous][atribute]) /
      30;
    return img[zoomState.previous][atribute] + distance * zooming;
  }

  function drawFunc(ctx) {
    clearBackground(ctx);
    const windowWith = window.innerWidth || 1580;
    const windowHeight = window.innerHeight || 789;
    const ratio = (windowWith / 1580) * 1.08;

    const centerX = (windowWith * 1.075 - windowWith) / 4;
    const moveModX = (1580 * ratio - windowWith) / windowWith / 2;
    const moveX = (centerX + cursorPosition.mouseX) * moveModX;

    const centerY = (windowHeight * 1.075 - windowHeight) / 4;
    const moveModY = (789 * ratio - windowHeight) / windowHeight / 2;

    const moveY = (centerY + cursorPosition.mouseY) * moveModX;

    // const zoomLocation = zoomState;
    // https://codepen.io/unicodeveloper/pen/LzNQYG
    // https://stackoverflow.com/questions/34597160/html-canvas-mouse-position-after-scale-and-translate
    // https://medium.com/@rteammco/smooth-animations-for-interactive-html-canvas-simulations-with-react-b6fc1109ecd7

    enrichedLib.forEach((img) => {
      // const zoomX = img[zoomLocation].x || 1;
      // const zoomY = img[zoomLocation].y || 1;
      // const zoom = img[zoomLocation].zoom || 1;

      ctx.drawImage(
        img.image,
        move(img, "x") + moveX * img.adjustX,
        move(img, "y") + moveY * img.adjustX,
        1580,
        789,
        0,
        0,
        1580 * ratio * move(img, "zoom"),
        789 * ratio * move(img, "zoom")
      );
    });
  }

  return (
    <div className="App">
      <nav>
        <button onClick={() => zoom("zoomTemple")}>Temple</button>
        <button onClick={() => zoom("zoomCommons")}>Commons</button>
        <button onClick={() => zoom("zoomOak")}>Central Oak</button>
        <button onClick={() => zoom("zoomArlien")}>Arlièn</button>
      </nav>
      <BackgroundCanvas
        draw={drawFunc}
        onClick={() => zoom("zoomDefault")}
      ></BackgroundCanvas>
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

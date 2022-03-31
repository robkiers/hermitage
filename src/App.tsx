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
import logo from "./assets/logo.png";
import { fromEvent } from "rxjs";
import { map, throttleTime } from "rxjs/operators";
import { useEffect, useState } from "react";

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

function UseMouseCoordinates() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("effect fired");
    const sub = fromEvent<MouseEvent>(document, "mousemove")
      .pipe(
        throttleTime(25),
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

  const [enrichedLib, setEnrichedLib] = useState<imagePart[]>();
  const [zoomLocation, setZoomLocation] = useState({
    current: "zoomDefault",
    previous: "zoomDefault",
    date: 0,
  });

  const [zoomPercentage, setZoomPercentage] = useState(0);

  const runTime = 750;

  useEffect(() => {
    loadImages().then((lib) => {
      setEnrichedLib(lib);
    });
  }, []);

  useEffect(() => {
    const currentTime = Date.now();
    const animationEndTime = zoomLocation.date + runTime;

    if (zoomPercentage < 1) {
      const timerId = setTimeout(() => {
        updateZoom(animationEndTime, currentTime);
      }, runTime / 30);
      return () => clearTimeout(timerId);
    }
  });

  function updateZoom(animationEndTime: number, currentTime: number) {
    const delta = animationEndTime - currentTime;
    const percentComplete = (runTime - delta) / runTime;
    setZoomPercentage(percentComplete > 1 ? 1 : percentComplete);
  }

  const imgLib = [
    {
      id: "img07",
      desc: "moon",
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
      desc: "hyjal",
      src: img06,
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
    const enrichedLib: imagePart[] = await Promise.all(
      imgLib.map(async (img) => {
        const temp = img as imagePart;
        const image = new Image();
        image.src = img.src;
        await new Promise((r) => (image.onload = r));
        temp.image = image;
        return temp as imagePart;
      })
    );
    return enrichedLib;
  }

  function zoom(prop: string) {
    if (prop !== zoomLocation.current) {
      const timed = Date.now();
      setZoomPercentage(0);
      setZoomLocation({ current: prop, previous: zoomLocation.current, date: timed });
    }
  }

  function clearBackground(context: CanvasRenderingContext2D) {
    const { width, height } = context.canvas;
    context.clearRect(0, 0, width, height);
  }

  function move(img: imagePart, attribute: string) {
    const newPosition = (
      img[zoomLocation.current as keyof imagePart] as imageZoom
    )[attribute as keyof imageZoom];
    const oldPosition = (
      img[zoomLocation.previous as keyof imagePart] as imageZoom
    )[attribute as keyof imageZoom];

    const distance = (newPosition - oldPosition) * zoomPercentage;

    return oldPosition + distance;
  }

  function drawFunc(ctx: CanvasRenderingContext2D) {
    clearBackground(ctx);
    const windowWith = window.innerWidth || 1580;
    const windowHeight = window.innerHeight || 789;
    const ratio = (windowWith / 1580) * 1.08;

    const centerX = (windowWith * 1.075 - windowWith) / 4;
    const moveModX = (1580 * ratio - windowWith) / windowWith / 2;
    const moveX = (centerX + cursorPosition.mouseX) * moveModX;

    const centerY = (windowHeight * 1.075 - windowHeight) / 4;
    // const moveModY = (789 * ratio - windowHeight) / windowHeight / 2;

    const moveY = (centerY + cursorPosition.mouseY) * moveModX;

    // https://codepen.io/unicodeveloper/pen/LzNQYG
    // https://stackoverflow.com/questions/34597160/html-canvas-mouse-position-after-scale-and-translate
    // https://medium.com/@rteammco/smooth-animations-for-interactive-html-canvas-simulations-with-react-b6fc1109ecd7
    enrichedLib?.forEach((img) => {
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
      <div className="header margin-top">
        <div className="logoContainer" onClick={() => zoom("zoomDefault")}>
          <img className="headerLogo" src={logo} alt="hermitage logo" />
          <span className="headerTitle">
            Moonrise <br /> Hermitage
          </span>
        </div>
        <nav>
          <button onClick={() => zoom("zoomTemple")}>Temple</button>
          <button onClick={() => zoom("zoomCommons")}>Commons</button>
          <button onClick={() => zoom("zoomOak")}>Central Oak</button>
          <button onClick={() => zoom("zoomArlien")}>Arlièn</button>
        </nav>
      </div>

      <BackgroundCanvas
        draw={drawFunc}
        onClick={() => zoom("zoomDefault")}
      ></BackgroundCanvas>
    </div>
  );
}

export default App;

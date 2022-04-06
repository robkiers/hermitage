import { useEffect, useState } from "react";
import useMousePosition from "../useMousePosition";
import LoadBackgroundLibrary, {
  imagePart,
  imageZoom,
} from "./BackgroundLibrary";
import BackgroundCanvas from "../BackgroundCanvas";

const Background = (props: any) => {
  const { zoom, zoomLocation } = props;
  // const enrichedLib = LoadBackgroundLibrary();
  const [enrichedLib, setEnrichedLib] = useState<imagePart[]>([]);

  const cursorPosition = useMousePosition();
  const [zoomPercentage, setZoomPercentage] = useState(0);
  const [location, setLocation] = useState("zoomDefault");

  const runTime = 750;

  useEffect(() => {
    const currentTime = Date.now();
    const animationEndTime = zoomLocation.date + runTime;
    if (location !== zoomLocation.current) {
      setLocation(zoomLocation.current);
      setZoomPercentage(0);
    }

    if (zoomPercentage < 1) {
      const timerId = setTimeout(() => {
        updateZoom(animationEndTime, currentTime);
      }, runTime / 30);
      return () => clearTimeout(timerId);
    }
  });

  useEffect(() => {
    LoadBackgroundLibrary().then((lib: any) => {
      setEnrichedLib(lib);
    });
  }, []);

  function updateZoom(animationEndTime: number, currentTime: number) {
    const delta = animationEndTime - currentTime;
    const percentComplete = (runTime - delta) / runTime;
    setZoomPercentage(percentComplete > 1 ? 1 : percentComplete);
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
    if (!enrichedLib) {
      return;
    }

    clearBackground(ctx);
    const imgWidth = 1580;
    // 6007/1580
    const imgHeight = 789;
    // 3000/789

    const windowWith = window.innerWidth || 1580;
    const windowHeight = window.innerHeight || 789;

    const adjustedImageWidth = windowWith + windowWith / 10;
    const moveX = -cursorPosition.mouseX / 10;

    const ratio = adjustedImageWidth / imgWidth;

    const adjustedImageHeight = imgHeight * ratio;
    const centerY = windowHeight - adjustedImageHeight;
    const movePercent = centerY / windowHeight;
    const moveY = cursorPosition.mouseY * movePercent;

    // https://codepen.io/unicodeveloper/pen/LzNQYG
    // https://stackoverflow.com/questions/34597160/html-canvas-mouse-position-after-scale-and-translate
    // https://medium.com/@rteammco/smooth-animations-for-interactive-html-canvas-simulations-with-react-b6fc1109ecd7
    enrichedLib?.forEach((img) => {
      ctx.drawImage(
        img.image,
        -(move(img, "x") * windowWith) + moveX * img.adjustX,
        move(img, "y") * windowHeight + moveY * img.adjustY,
        adjustedImageWidth * move(img, "zoom"),
        adjustedImageHeight * move(img, "zoom")
      );
    });
  }

  return (
    <BackgroundCanvas
      draw={drawFunc}
      onClick={() => zoom("zoomDefault")}
    ></BackgroundCanvas>
  );
};

export default Background;

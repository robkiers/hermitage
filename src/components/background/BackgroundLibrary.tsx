// import img11 from "./layer11.png";
// import img12 from "./layer12.png";
// import img13 from "./layer13.png";
// import img14 from "./layer14.png";
// import img15 from "./layer15.png";
import Background from "./BACKGROUND.jpg";
import Commons from "./commons.png";
import Temples from "./temples.png";
import Tower from "./tower.png";
import Valley from "./valley.png";
import Sign from "./sig.png";

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
  MAIN: imageZoom;
  COMMONS: imageZoom;
  OAK: imageZoom;
  TEMPLE: imageZoom;
}

async function LoadBackgroundLibrary() {
  // const [enrichedLib, setEnrichedLib] = useState<imagePart[]>();

  // useEffect(() => {
  //   loadImages().then((lib: any) => {
  //     setEnrichedLib(lib);
  //   });
  // }, []);

  const imgLib = [
    {
      id: "img05",
      desc: "background",
      src: Background,
      adjustX: 0.3,
      adjustY: 0.3,
      MAIN: { x: 0, y: 0, zoom: 1 },
      COMMONS: { x: 0.5, y: -0.2, zoom: 1.6 },
      OAK: { x: 0, y: -0.5, zoom: 1.5 },
      TEMPLE: { x: 0.5, y: -0.1, zoom: 1.75 },
    },
    {
      id: "img04",
      desc: "valley",
      src: Valley,
      adjustX: 0.4,
      adjustY: 0.4,
      MAIN: { x: 0, y: 0, zoom: 1 },
      COMMONS: { x: 0.75, y: -0.6, zoom: 1.75 },
      OAK: { x: -0.15, y: -0.5, zoom: 1.5 },
      TEMPLE: { x: 0.75, y: 0.15, zoom: 1.75 },
    },
    {
      id: "img03",
      desc: "temple",
      src: Temples,
      adjustX: 0.5,
      adjustY: 0.5,
      MAIN: { x: 0, y: 0, zoom: 1 },
      COMMONS: { x: 0.8, y: -0.8, zoom: 1.75 },
      OAK: { x: -0, y: -0.7, zoom: 1.7 },
      TEMPLE: { x: 0.8, y: 0.05, zoom: 1.75 },
    },
    {
      id: "img02",
      desc: "commons",
      src: Commons,
      adjustX: 1,
      adjustY: 1,
      MAIN: { x: 0, y: 0, zoom: 1 },
      COMMONS: { x: 0.75, y: -0.85, zoom: 1.75 },
      OAK: { x: -0, y: -0.75, zoom: 1.75 },
      TEMPLE: { x: 0.6, y: 0.2, zoom: 1.6 },
    },
    {
      id: "img01",
      desc: "tower",
      src: Tower,
      adjustX: 1,
      adjustY: 1,
      MAIN: { x: 0, y: 0, zoom: 1 },
      COMMONS: { x: 0.75, y: -0.9, zoom: 1.75 },
      OAK: { x: 0, y: -0.25, zoom: 1.5 },
      TEMPLE: { x: 0.75, y: 0.1, zoom: 1.4 },
    },
    {
      id: "sign",
      desc: "sign",
      src: Sign,
      adjustX: 1,
      adjustY: 1,
      MAIN: { x: -0.1, y: 0.9, zoom: 0.07 },
      COMMONS: { x: -0.1, y: 0.9, zoom: 0.07 },
      OAK: { x: -0.1, y: 0.9, zoom: 0.07 },
      TEMPLE: { x: -0.1, y: 0.9, zoom: 0.07 },
    },
  ];

  // return async function loadImages() {
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
  // };

  return await Promise.all(
    imgLib.map(async (img) => {
      const temp = img as imagePart;
      const image = new Image();
      image.src = img.src;
      await new Promise((r) => (image.onload = r));
      temp.image = image;
      return temp as imagePart;
    })
  );
}

export default LoadBackgroundLibrary;

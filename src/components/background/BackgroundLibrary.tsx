import img11 from "./layer11.png";
import img12 from "./layer12.png";
import img13 from "./layer13.png";
import img14 from "./layer14.png";
import img15 from "./layer15.png";
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
      src: img15,
      adjustX: 0.3,
      adjustY: 0.3,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 0.5, y: -0.2, zoom: 1.6 },
      zoomOak: { x: 0, y: -0.5, zoom: 1.5 },
      zoomTemple: { x: 0.5, y: -0.1, zoom: 1.75 },
      zoomArlien: { x: 50, y: 325, zoom: 2.5 },
    },
    {
      id: "img04",
      desc: "valley",
      src: img14,
      adjustX: 0.4,
      adjustY: 0.4,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 0.75, y: -0.6, zoom: 1.75 },
      zoomOak: { x: -0.15, y: -0.5, zoom: 1.5 },
      zoomTemple: { x: 0.75, y: 0.15, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img03",
      desc: "temple",
      src: img13,
      adjustX: 0.5,
      adjustY: 0.5,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 0.8, y: -0.8, zoom: 1.75 },
      zoomOak: { x: -0, y: -0.7, zoom: 1.7 },
      zoomTemple: { x: 0.8, y: 0.05, zoom: 1.75 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img02",
      desc: "commons",
      src: img12,
      adjustX: 1,
      adjustY: 1,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 0.75, y: -0.85, zoom: 1.75 },
      zoomOak: { x: -0, y: -0.75, zoom: 1.75 },
      zoomTemple: { x: 0.6, y: 0.2, zoom: 1.6 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
    },
    {
      id: "img01",
      desc: "tower",
      src: img11,
      adjustX: 1,
      adjustY: 1,
      zoomDefault: { x: 0, y: 0, zoom: 1 },
      zoomCommons: { x: 0.75, y: -0.9, zoom: 1.75 },
      zoomOak: { x: 0, y: -0.25, zoom: 1.5 },
      zoomTemple: { x: 0.75, y: 0.1, zoom: 1.4 },
      zoomArlien: { x: -10, y: 325, zoom: 2.25 },
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

  // return enrichedLib;
}

export default LoadBackgroundLibrary;

import "./App.scss";
import { useEffect, useState } from "react";

import Header from "./layouts/Header";
import BeautifyUI from "./layouts/BeautifyUI";
import Oak from "./pages/oak/oak";
import Commons from "./pages/commons/commons";
import Background from "./components/background/Background";
import { fromEvent, map } from "rxjs";

function App() {
  const [zoomLocation, setZoomLocation] = useState({
    current: "zoomDefault",
    previous: "zoomDefault",
    date: 0,
  });

  const [showUI, setShowUI] = useState(true);

  useEffect(() => {
    const sub = fromEvent<MouseEvent>(document, "click")
      .pipe(map((event: MouseEvent) => event))
      .subscribe((event) => {
        console.log(zoomLocation.current);
        console.log(event.target);
        if (zoomLocation.current !== "zoomDefault" && (event.target as Element).id === "main") {
          zoom("zoomDefault");
        }
      });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  function zoom(prop: string) {
    console.log("zoom");
    if (prop !== zoomLocation.current) {
      const timed = Date.now();
      setZoomLocation({
        current: prop,
        previous: zoomLocation.current,
        date: timed,
      });
    }
  }

  function toggleUI() {
    setShowUI(!showUI);
  }

  return (
    <>
      {showUI ? <Header zoom={zoom}></Header> : null}
      {/* <div className="page"> */}
      {showUI && zoomLocation.current === "zoomOak" ? <Oak></Oak> : null}
      {showUI && zoomLocation.current === "zoomCommons" ? <Commons></Commons> : null}
      {/* </div> */}
      <BeautifyUI toggleUI={toggleUI} showUI={showUI}></BeautifyUI>

      <Background zoom={zoom} zoomLocation={zoomLocation}></Background>
    </>
  );
}

export default App;

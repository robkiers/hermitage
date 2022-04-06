import "./App.scss";
import { useEffect, useState } from "react";

import Header from "./layouts/Header";
import BeautifyUI from "./layouts/BeautifyUI";
import Oak from "./pages/oak";
import Commons from "./pages/commons";
import Background from "./components/background/Background";

function App() {
  const [zoomLocation, setZoomLocation] = useState({
    current: "zoomDefault",
    previous: "zoomDefault",
    date: 0,
  });

  const [showUI, setShowUI] = useState(true);

  function zoom(prop: string) {
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
    <div className="App">
      {showUI ? <Header zoom={zoom}></Header> : null}
      {showUI && zoomLocation.current === "zoomOak" ? <Oak></Oak> : null}
      {showUI && zoomLocation.current === "zoomCommons" ? <Commons></Commons> : null}
      <BeautifyUI toggleUI={toggleUI} showUI={showUI}></BeautifyUI>
      <Background zoom={zoom} zoomLocation={zoomLocation}></Background>
    </div>
  );
}

export default App;

// {showUI &&  zoomLocation.current === "zoomCommons" ? <Commons></Commons> : null}
// <BackgroundCanvas
//   draw={drawFunc}
//   onClick={() => zoom("zoomDefault")}
// ></BackgroundCanvas>

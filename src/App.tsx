import "./App.scss";
import { useEffect, useState } from "react";

import Header from "./layouts/Header";
import BeautifyUI from "./layouts/BeautifyUI";
import Oak from "./pages/oak";
import Commons from "./pages/commons";
import Background from "./components/background/Background";
import { fromEvent, map, tap } from "rxjs";

function App() {
  const [zoomLocation, setZoomLocation] = useState({
    current: "zoomDefault",
    previous: "zoomDefault",
    date: 0,
  });
  const [showUI, setShowUI] = useState(true);

  useEffect(() => {
    const sub = fromEvent<MouseEvent>(document, "mousedown")
      .pipe(map((event: MouseEvent) => event))
      .subscribe((event) => {
        console.log(event);
      });

    return () => {
      sub.unsubscribe();
    };
  }, []);

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
      {showUI && zoomLocation.current === "zoomCommons" ? (
        <Commons></Commons>
      ) : null}
      <BeautifyUI toggleUI={toggleUI} showUI={showUI}></BeautifyUI>
      <div>
        <Background zoom={zoom} zoomLocation={zoomLocation}></Background>
      </div>
    </div>
  );
}

export default App;

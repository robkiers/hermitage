import "./App.scss";
import { useEffect, useState } from "react";

import Header from "./layouts/Header";
import BeautifyUI from "./layouts/BeautifyUI";
import Oak from "./pages/oak/oak";
import Commons from "./pages/commons/commons";
import Background from "./components/background/Background";
import { fromEvent, map } from "rxjs";
import Temple from "./pages/temple/temple";
import OC from "./pages/oc/oc";

function App() {
  const [zoomLocation, setZoomLocation] = useState({
    current: "MAIN",
    previous: "MAIN",
    date: 0,
  });

  const [page, setPage] = useState("NONE");

  const [showUI, setShowUI] = useState(true);

  useEffect(() => {
    const sub = fromEvent<MouseEvent>(document, "click")
      .pipe(map((event: MouseEvent) => event))
      .subscribe((event) => {
        if (zoomLocation.current !== "MAIN" && (event.target as Element).id === "root") {
          navigate("NONE");
        }
      });
    return () => {
      sub.unsubscribe();
    };
  });

  function navigate(prop: string) {
    switch (prop) {
      case "OAK":
      case "COMMONS":
      case "TEMPLE":
        zoom(prop);
        setPage(prop);
        break;
      case "OC":
        zoom("MAIN");
        setPage(prop);
        break;
      case "NONE":
      default:
        zoom("MAIN");
        setPage("NONE");
    }
  }

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

  function setStyle(show: boolean) {
    return show ? "page show" : "page";
  }

  function renderPage(prop: string) {
    switch (prop) {
      case "OAK":
        return <Oak></Oak>;
      case "COMMONS":
        return <Commons></Commons>;
      case "TEMPLE":
        return <Temple></Temple>;
      case "OC":
        return <OC></OC>;
      case "MAIN":
      default:
        return null;
    }
  }

  return (
    <>
      <span className={setStyle(showUI)}>
        <Header navigate={navigate}></Header>
      </span>
      <span className={setStyle(showUI)}>{renderPage(page)}</span>
      <BeautifyUI toggleUI={toggleUI} showUI={showUI}></BeautifyUI>
      <Background zoomLocation={zoomLocation}></Background>
    </>
  );
}

export default App;

import { useState } from "react";
import OakDescription from "./oakdescription";
import OakHermitage from "./oakHermitage";
import OakImages from "./oakImages";

function Oak() {
  const [state, setState] = useState("HERMITAGE");

  function renderPage(prop: string) {
    switch (prop) {
      case "DESCRIPTION":
        return <OakDescription></OakDescription>;
      case "IMAGES":
        return <OakImages></OakImages>;
      case "HERMITAGE":
      default:
        return <OakHermitage></OakHermitage>;
    }
  }

  return (
    <div className="pageDisplay">
      <div className="pageButtons">
        <button className="small" onClick={() => setState("HERMITAGE")}>
          Hermitage
        </button>
        <button className="small" onClick={() => setState("DESCRIPTION")}>
          Description
        </button>
        <button className="small" onClick={() => setState("IMAGES")}>
          Images
        </button>
      </div>
      <div className="pageText">{renderPage(state)}</div>
    </div>
  );
}

export default Oak;

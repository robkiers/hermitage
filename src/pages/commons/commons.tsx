import { useState } from "react";
import CommonsDescription from "./commonsDescription";
import CommonsImage from "./commonsImage";

function Commons() {
  const [state, setState] = useState("COMMONS");

  return (
    <div className="oakDisplay">
      <div className="oakButtons">
        <button className="small" onClick={() => setState("COMMONS")}>
          Description
        </button>
        <button className="small" onClick={() => setState("TRADE")}>
          Trade
        </button>
        <button className="small" onClick={() => setState("IMAGES")}>
          Illustrations
        </button>
      </div>
      <div className="oakText">
        {state === "COMMONS" ? (
          <CommonsDescription></CommonsDescription>
        ) : null}
        {state === "IMAGES" ? <CommonsImage></CommonsImage> : null}
      </div>
    </div>
  );
}

export default Commons;

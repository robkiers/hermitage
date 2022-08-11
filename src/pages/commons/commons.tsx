import { useState } from "react";
import CommonsDescription from "./commonsDescription";
import CommonsImage from "./commonsImage";
import CommonsTrade from "./commonsTrade";

function Commons() {
  const [state, setState] = useState("COMMONS");

  return (
    <div className="pageDisplay">
      <div className="pageButtons">
        <button className="small" onClick={() => setState("COMMONS")}>
          Description
        </button>
        <button className="small" onClick={() => setState("TRADE")}>
          Trade
        </button>
        <button className="small" onClick={() => setState("IMAGES")}>
          Images
        </button>
      </div>
      <div className="pageText">
        {state === "COMMONS" ? <CommonsDescription></CommonsDescription> : null}
        {state === "IMAGES" ? <CommonsImage></CommonsImage> : null}
        {state === "TRADE" ? <CommonsTrade></CommonsTrade> : null}
      </div>
    </div>
  );
}

export default Commons;

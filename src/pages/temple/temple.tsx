import { useState } from "react";
import TempleDescription from "./templeDescription";
import TempleImage from "./templeImage";
import TempleLore from "./templelore";

function Temple() {
  const [state, setState] = useState("DESCRIPTION");

  return (
    <div className="pageDisplay">
      <div className="pageButtons">
        <button className="small" onClick={() => setState("DESCRIPTION")}>
          Description
        </button>
        <button className="small" onClick={() => setState("LORE")}>
          Lore
        </button>
        <button className="small" onClick={() => setState("IMAGES")}>
          Images
        </button>
      </div>
      <div className="pageText">
        {state === "DESCRIPTION" ? (
          <TempleDescription></TempleDescription>
        ) : null}
        {state === "IMAGES" ? <TempleImage></TempleImage> : null}
        {state === "LORE" ? <TempleLore></TempleLore> : null}
      </div>
    </div>
  );
}

export default Temple;

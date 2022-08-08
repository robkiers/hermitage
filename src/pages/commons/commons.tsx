import { useState } from "react";

function Commons() {
  const [state, setState] = useState("HERMITAGE");

  return (
    <div className="oakDisplay">
      <div className="oakButtons">
        <button className="small" onClick={() => setState("COMMONS")}>
          The Commons
        </button>
        <button className="small" onClick={() => setState("DESCRIPTION")}>
          Description
        </button>
        <button className="small" onClick={() => setState("IMAGES")}>
          Illustrations
        </button>
      </div>
      <div className="oakText">
        {/* {state === "HERMITAGE" ? <OakHermitage></OakHermitage> : null} */}
        {/* {state === "DESCRIPTION" ? <OakDescription></OakDescription> : null} */}
      </div>
    </div>
  );
}

export default Commons;

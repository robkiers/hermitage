import { useState } from "react";
import OakDescription from "./oakdescription";
import OakHermitage from "./oakHermitage";

function Oak() {
  const [state, setState] = useState("HERMITAGE");

  return (
    <div className="oakDisplay">
      <div className="oakButtons">
        <button className="small" onClick={() => setState("HERMITAGE")}>Hermitage</button>
        <button className="small" onClick={() => setState("DESCRIPTION")}>Description</button>
      </div>
      <div className="oakText">
        {state === "HERMITAGE" ? <OakHermitage></OakHermitage> : null}
        {state === "DESCRIPTION" ? <OakDescription></OakDescription> : null}
      </div>
    </div>
  );
}

export default Oak;

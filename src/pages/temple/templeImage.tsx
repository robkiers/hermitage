import { useState } from "react";
import iso from "./assets/temple_sketch.jpg";

function TempleImage() {
  const [state, setState] = useState("HERMITAGE");

  return (
    <div className="previewContainer">
      <h1>Sketch</h1>
      <img className="previewImage" src={iso} alt="preview details" />
    </div>
  );
}

export default TempleImage;

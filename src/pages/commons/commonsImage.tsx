import { useState } from "react";
import details from "./assets/details-commons.jpg";
import map from "./assets/map-commons2.jpg";
import iso from "./assets/iso-commons.jpg";
import Modal from "../../components/modal/Modal";

function CommonsImage() {
  // const [state, setState] = useState("HERMITAGE");

  const toggle = () => Modal(<h1>Success</h1>);

  return (
    <div>
      <div className="previewContainer">
        <h1>Map</h1>
        <img
          className="previewImage"
          src={map}
          alt="preview details"
          onClick={() => toggle()}
        />
      </div>
      <div className="previewContainer">
        <h1>Iso</h1>
        <img className="previewImage" src={iso} alt="preview details" />
      </div>
      <div className="previewContainer">
        <h1>Details</h1>
        <img className="previewImage" src={details} alt="preview details" />
      </div>
    </div>
  );
}

export default CommonsImage;

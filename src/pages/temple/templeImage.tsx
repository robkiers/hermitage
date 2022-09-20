import iso from "./assets/temple_sketch.jpg";

function TempleImage() {

  return (
    <div className="previewContainer">
      <h1>Sketch</h1>
      <img className="previewImage" src={iso} alt="preview details" />
    </div>
  );
}

export default TempleImage;

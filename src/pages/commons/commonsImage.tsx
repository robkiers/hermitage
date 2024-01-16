import details from "./assets/details-commons.jpg";
import map from "./assets/map-commons2.jpg";
import iso from "./assets/iso-commons.jpg";
import Modal from "react-modal";
import React from "react";
Modal.setAppElement("#root");

function CommonsImage() {
  const [modalIsOpen, setIsOpen] = React.useState({ modal: false, img: " " });

  function openModal(img: string) {
    setIsOpen({ modal: true, img: img });
  }

  function closeModal() {
    setIsOpen({ modal: false, img: '' });
  }

  return (
    <div>
      <div className="previewContainer">
        <h1>Map</h1>
        <img className="previewImage" src={map} alt="preview details" onClick={() => openModal(map)}/>
      </div>
      <div className="previewContainer">
        <h1>Iso</h1>
        <img className="previewImage" src={iso} alt="preview details" onClick={() => openModal(iso)}/>
      </div>
      <div className="previewContainer">
        <h1>Details</h1>
        <img className="previewImage" src={details} alt="preview details" onClick={() => openModal(details)}/>
      </div>
      <Modal isOpen={modalIsOpen.modal} onRequestClose={closeModal} contentLabel="Example Modal">
        <button className="modalButton" onClick={closeModal}>
          close
        </button>
        <img className="modalImage" src={modalIsOpen.img} alt="modal"/>
      </Modal>
    </div>
  );
}

export default CommonsImage;
407072
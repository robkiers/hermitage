import iso from "./assets/temple_sketch.jpg";
import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#root");

function TempleImage() {
  const [modalIsOpen, setIsOpen] = React.useState({ modal: false, img: "" });

  function openModal(img: string) {
    setIsOpen({ modal: true, img: img });
  }

  function closeModal() {
    setIsOpen({ modal: false, img: '' });
  }

  return (
    <div className="previewContainer">
      <h1>Sketch</h1>
      <img className="previewImage" src={iso} alt="preview details" onClick={() => openModal(iso)} />
      <Modal isOpen={modalIsOpen.modal} onRequestClose={closeModal} contentLabel="Example Modal">
        <button className="modalButton" onClick={closeModal}>
          close
        </button>
        <img className="modalImage" src={modalIsOpen.img} alt="modal" />
      </Modal>
    </div>
  );
}

export default TempleImage;

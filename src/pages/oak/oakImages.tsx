import map from "./assets/map_moonrisevalley.jpg";
import Modal from "react-modal";
import React from "react";
Modal.setAppElement("#root");

function OakImages() {
  const [modalIsOpen, setIsOpen] = React.useState({ modal: false, img: " " });

  function openModal(img: string) {
    setIsOpen({ modal: true, img: img });
  }

  function closeModal() {
    setIsOpen({ modal: false, img: '' });
  }

  return (
    <div className="">
      <h1>Map</h1>
      <img className="previewImage" src={map} alt="preview details" onClick={() => openModal(map)} />
      <Modal isOpen={modalIsOpen.modal} onRequestClose={closeModal} contentLabel="Example Modal" closeTimeoutMS={200}>
        <button className="modalButton" onClick={closeModal}>
          close
        </button>
        <img className="modalImage" src={map} alt="modal"/>
      </Modal>
    </div>
  );
}

export default OakImages;

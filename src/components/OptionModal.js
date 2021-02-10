import React from "react";
import Modal from "react-modal";

const OptionModal = ({ selectedOption, close, visible }) => (
  <Modal
    isOpen={visible}
    contentLabel="Selected Option"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{selectedOption}</p>

    <button className="button" onClick={close}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;

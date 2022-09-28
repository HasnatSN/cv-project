import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Inputs() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="button-div">
      <button className="reset-button">Reset</button>
      <button onClick={() => setModalIsOpen(true)} className="help">
        Help
      </button>
      <button>+ Experience</button>
      <button>+ Education</button>
      <button className="pdf-button">Turn to PDF</button>

      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="modal-title">
          <h2>How to use the website:</h2>
          <button onClick={() => setModalIsOpen(false)}>X</button>
        </div>
        <h3>Change text:</h3>
        <p>
          Simply click on the textfield you want to change and make your
          prefered changes.
        </p>
        <hr />
        <h3>Add an Experience/Education block:</h3>
        <p>Use the "+Experience" button to add an experience block.</p>
        <p>Use the "+Education" button to add an education block.</p>
        <hr />
        <h3>Remove an Experience/Education block:</h3>
        <p>
          On the upper right side of the block is a little red X button to
          remove the block. The Button won't be visible in the PDF.
        </p>
        <hr />
        <h3>Reset Button</h3>{" "}
        <p>
          If you decide you want to remove all the changes you have made. Click
          on the reset button and the standard values will be put into the
          fields again. With this all your changes will be lost!
        </p>
        <hr />
        <h3>Export to PDF:</h3>
        <p>
          Once you are done with your changes, you can simply click on the "Turn
          to PDF" button and then save the preview as a PDF onto your PC.
          Reminder: The remove button of the expierience/education blocks won't
          be visible in the PDF.
        </p>
      </Modal>
    </div>
  );
}

export default Inputs;

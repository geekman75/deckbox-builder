// ** React Import
import React, { FC, useState, MouseEventHandler } from "react";

// ** Custom Component Import
import Modal from "components/modal";

// ** Style Import
import "assets/css/page2.css";

const Button2: FC = () => {
  // State
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [removedCount, setRemovedCount] = useState<number>(0);

  const handleRemove: MouseEventHandler = () => {
    setRemovedCount(removedCount + 1);
    setModalOpen(false);
  };

  const renderFooter = () => {
    return (
      <React.Fragment>
        <button className="footer-btn button2-remove" onClick={handleRemove}>
          Remove
        </button>
        <button
          className="footer-btn button2-cancel"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          Cancel
        </button>
      </React.Fragment>
    );
  };

  return (
    <div>
      <button
        className="btn w-300"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Remove {removedCount}
      </button>
      <Modal title="Remove?" isOpen={modalOpen} footer={renderFooter()}>
        Are you sure you want to remove the Remove {removedCount} button?
      </Modal>
    </div>
  );
};

export default Button2;

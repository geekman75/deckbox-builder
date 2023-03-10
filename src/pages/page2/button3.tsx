// ** React Import
import React, { FC, useState, MouseEventHandler } from "react";

// ** Custom Component Import
import Modal from "components/modal";

// ** Style Import
import "assets/css/page2.css";

const Button3: FC = () => {
  // State
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [deletedCount, setDeletedCount] = useState<number>(0);

  const handleDelete: MouseEventHandler = () => {
    setDeletedCount(deletedCount + 1);
    setModalOpen(false);
  };

  const renderFooter = () => {
    return (
      <React.Fragment>
        <button className="footer-btn button3-delete" onClick={handleDelete}>
          Delete
        </button>
        <button
          className="footer-btn button3-cancel"
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
        Delete {deletedCount}
      </button>
      <Modal title="Delete?" isOpen={modalOpen} footer={renderFooter()}>
        Are you sure you want to delete the Delete {deletedCount} button? This cannot be undone!
      </Modal>
    </div>
  );
};

export default Button3;

// ** React Import
import React, { FC, useState, MouseEventHandler } from "react";

// ** Custom Component Import
import Modal from "components/modal";

// ** Style Import
import "assets/css/page2.css";

const Button3: FC = () => {
  // State
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(true)
  const [deletedCount, setDeletedCount] = useState<number>(0);

  const handleDelete: MouseEventHandler = () => {
    setModalOpen(false);
    setIsDelete(!isDelete);
  };

  const handleModalOpen: MouseEventHandler = () => {
    setModalOpen(true);
    setDeletedCount(deletedCount + 1);
  }

  const renderFooter = (): React.ReactNode => {
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

  const buttonText = (isDelete ? 'Delete ' : 'Disabled ') + deletedCount

  return (
    <div>
      <button
        className="btn w-300"
        onClick={handleModalOpen}
      >
        {buttonText}
      </button>
      <Modal title="Delete?" isOpen={modalOpen} footer={renderFooter()}>
        Are you sure you want to delete the {buttonText} button? This cannot be undone!
      </Modal>
    </div>
  );
};

export default Button3;

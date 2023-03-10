// ** React Import
import React, { FC, useState } from "react"

// ** Custom Component Import
import Modal from "components/modal";

// ** Style Import
import "assets/css/page2.css"

const Button1: FC = () => {

  // State
  const [infoModal, setInfoModal] = useState<boolean>(false)

  const renderFooter = () => {
    return (
      <React.Fragment>
        <button className="footer-btn button1-ok" onClick={() => {setInfoModal(false)}}>
          OK
        </button>
      </React.Fragment>
    )    
  }

  return (
    <div>
      <button className="btn w-300" onClick={() => {setInfoModal(true)}}>
        Single CTA
      </button>
      <Modal 
        title="Information"
        isOpen={infoModal}
        footer={renderFooter()}
      >
        You have clicked the Single CTA button
      </Modal>
    </div>
  )
}

export default Button1
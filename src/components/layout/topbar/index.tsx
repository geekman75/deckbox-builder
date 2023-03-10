// ** React Import
import { FC } from "react";

// ** FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeight } from '@fortawesome/free-solid-svg-icons'

const Topbar: FC = () => {
  return (
    <div className="topbar">
      <h2 className="topbar-brand">
        <FontAwesomeIcon icon={faWeight} />
        <span className="title">Pioneering Programmers Test App</span>
      </h2>
    </div>
  )
}

export default Topbar
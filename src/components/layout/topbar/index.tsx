// ** React Import
import { FC } from "react";
import { Link } from "react-router-dom";

// ** FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeight } from '@fortawesome/free-solid-svg-icons'

const Topbar: FC = () => {
  return (
    <div className="topbar">
      <h2 className="topbar-brand">
        <Link to="/">
          <FontAwesomeIcon icon={faWeight} />
          <span className="title">Pioneering Programmers Test App</span>
        </Link>
      </h2>
    </div>
  )
}

export default Topbar
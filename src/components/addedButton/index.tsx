// ** React Import
import {
  FC,
  MouseEventHandler,
} from "react";

// ** Redux Import
import { useDispatch } from "react-redux";
import { pushEvent } from "redux/event";

// ** Type Import
import { AppDispatch } from "redux/store";

interface ComponentProps {
    index: number
}

const AddedButton: FC<ComponentProps> = (props) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick: MouseEventHandler = () => {
    dispatch(pushEvent(`Button ${props.index} clicked`));
  };

  return (
    <button
      onClick={handleClick}
      className="btn w-300"
    >
      Button {props.index}
    </button>
  );
};

export default AddedButton;

// ** React Import
import {
  FC,
  MouseEventHandler,
  useState,
  ChangeEventHandler,
} from "react";

// ** Redux Import
import { useDispatch } from "react-redux";
import { pushEvent } from "redux/event";

// ** FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// ** Type Import
import { AppDispatch } from "redux/store";

// ** Style Import
import "assets/css/msg-send.css";

const MessageSendComponent: FC = () => {
  const [message, setMessage] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  const handleSendMessage: MouseEventHandler = () => {
    dispatch(pushEvent("Message sent: " + message));
    setMessage("");
  };

  const handleChangeMessage: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="msg-send-component">
      <textarea 
        onChange={handleChangeMessage} 
        value={message} 
        rows={6} 
        className="w-300"
      />
      <br/>
      <button 
        onClick={handleSendMessage} 
        disabled={message === ""} 
        className="btn w-300"
      >
        <FontAwesomeIcon icon={faPaperPlane} /> Send
      </button>
    </div>
  );
};

export default MessageSendComponent;

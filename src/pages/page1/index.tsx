// ** React Import
import { FC, MouseEventHandler } from "react";

// ** Redux Import
import { useDispatch, useSelector } from "react-redux";
import { addButton, pushEvent } from "redux/event";

// ** Custom Component Import
import ThemeButton from "components/themeButton";
import MessageSendComponent from "components/msgSend";

// ** Type Import
import { AppDispatch, ReduxStoreType } from "redux/store";

// ** Style Import
import "assets/css/page1.css";
import AddedButton from "components/addedButton";

const Page1: FC = () => {
  // ** Store
  const btnCount = useSelector<ReduxStoreType, number>(
    (state) => state.event.btnCount
  );
  const evenList = useSelector<ReduxStoreType, Array<string>>(
    (state) => state.event.eventList
  );
  const dispatch: AppDispatch = useDispatch();

  const handleAddButton: MouseEventHandler = () => {
    dispatch(pushEvent(`Button ${btnCount + 1} added`))
    dispatch(addButton());
  };

  return (
    <div className="section-page1">
      <div className="left-part">
        <div className="section-title">Change Theme</div>
        <ThemeButton />
        <div className="section-title">Send Message</div>
        <MessageSendComponent />
        <div className="section-title">Add Button</div>
        <button className="btn w-300" onClick={handleAddButton}>
          Add Button {btnCount + 1}
        </button>
        {Array.from({length: btnCount}).map((item: any, index: number) => (
          <div key={index}>
            <AddedButton index={index + 1} />
          </div>
        ))}
      </div>
      <div className="right-part">
        <div className="section-title">Message List</div>
        <div className="message-list">
          {evenList.map((item: string) => (
            <p>{item}</p>
          ))}
          {evenList.length === 0 && (
            <p>No message found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page1;

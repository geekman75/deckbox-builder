// ** React Import
import { FC } from "react";

// ** Custom Component Import
import Button1 from "./button1";
import Button2 from "./button2";
import Button3 from "./button3";

const Page2: FC = () => {
  return (
    <div className="section-page2">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
};

export default Page2;
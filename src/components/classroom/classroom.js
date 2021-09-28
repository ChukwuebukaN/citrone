import React from "react";
import Header from "../header/header";
import { ReactComponent as CitroneBgUp } from "../svg/citrone-bgup.svg";
import { ReactComponent as CitroneBgDown } from "../svg/citrone-bgdown.svg";

function Classroom() {
  return (
    <div>
      <Header className="sticky top-0 z-50" />
      <CitroneBgUp className="citrone-bg absolute right-0" />
      <CitroneBgDown className="citrone-bg absolute bottom-0 left-0" />
      <div>
        {/* <div></div>
        <div></div> */}
      </div>
    </div>
  );
}

export default Classroom;

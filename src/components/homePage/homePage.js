import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as CitroneLogo } from "../header/svg/citrone-logo.svg";
import { ReactComponent as CitroneBgUp } from "../svg/citrone-bgup.svg";
import { ReactComponent as CitroneBgDown } from "../svg/citrone-bgdown.svg";

function HomePage() {
  const history = useHistory();

  const handleClassroomBtn = () => {
    history.push("/classroom");
  };

  return (
    <div>
      <CitroneLogo className="ml-6 mt-4 top-0 left-0" />
      <CitroneBgUp className="citrone-bg absolute top-0 right-0" />
      <CitroneBgDown className="citrone-bg absolute bottom-0 left-0" />
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="text-center font-black">
            <h1 className=" text-6xl mb-8 leading-tight">Hello Citronite!</h1>
            <button
              type="button"
              className="enter-classroom-btn"
              onClick={handleClassroomBtn}
            >
              Enter Classroom 👋
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

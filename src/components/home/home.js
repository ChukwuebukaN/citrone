import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as CitroneLogo } from "../header/svg/citrone-logo.svg";
import { ReactComponent as CitroneBgUp } from "../svg/citrone-bgup.svg";
import { ReactComponent as CitroneBgDown } from "../svg/citrone-bgdown.svg";

function HomePage() {
  const history = useHistory();

  /** Routes user to classroom component */
  const handleClassroomRoute = () => {
    history.push("/classroom");
  };

  /** Displays the welcome component */
  const displayWelcome = () => {
    return (
      <div>
        <div className="m-view flex">
          <div className="m-auto">
            <div className="text-center font-black">
              <h1 className=" text-6xl mb-8 leading-tight">Hello Citronite!</h1>
              <button
                type="button"
                className="enter-classroom-btn"
                onClick={handleClassroomRoute}
              >
                Enter Classroom 👋
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <CitroneLogo className="ml-6 mt-4 top-0 left-0 cursor-pointer" />
      <CitroneBgUp className="citrone-bg absolute top-0 right-0" />
      <CitroneBgDown className="citrone-bg absolute bottom-0 left-0" />
      {displayWelcome()}
    </div>
  );
}

export default HomePage;

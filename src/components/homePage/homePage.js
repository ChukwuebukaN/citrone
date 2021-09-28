import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as CitroneLogo } from "./img/citroneLogo.svg";
import { ReactComponent as CitroneBgUp } from "./img/citroneBgUp.svg";
import { ReactComponent as CitroneBgDown } from "./img/citroneBgDown.svg";

function HomePage() {
  const history = useHistory();

  const handleClassroomBtn = () => {
    history.push("/classroom");
  };

  return (
    <div>
      <CitroneLogo className="absolute ml-4 mt-4 top-0 left-0" />
      <CitroneBgUp className="absolute top-0 right-0 " />
      <CitroneBgDown className="absolute bottom-0 left-0" />
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

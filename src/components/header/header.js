import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as CitroneLogo } from "./svg/citrone-logo.svg";
import { ReactComponent as CalenderIcon } from "./svg/calender-icon.svg";
import { ReactComponent as BellIcon } from "./svg/bell-icon.svg";

function Header() {
  const history = useHistory();

  /** Routes user back to home page */
  const handleHomeRoute = () => {
    history.push("/");
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="border-b-2 border-gray-300 pb-4 pt-4">
        <button type="button" onClick={handleHomeRoute}>
          <CitroneLogo className="ml-6 top-0 left-0" />
        </button>
        <button
          type="button"
          className="absolute top-0 right-36 flex items-center justify-center"
        >
          <span>
            <CalenderIcon className=" h-6 w-6 mt-6 " />
          </span>
          <span className="absolute left-4 items-center justify-center bg-purple-500 text-white text-xs rounded-full h-4 w-4">
            1
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-24 flex items-center justify-center"
        >
          <span>
            <BellIcon className=" h-6 w-6 mt-6 " />
          </span>
          <span className="absolute left-2.5 items-center justify-center bg-purple-500 text-white text-xs rounded-full h-4 w-4">
            5
          </span>
        </button>
        <div className="absolute top-4 right-6 rounded-full h-10 w-10 flex items-center justify-center bg-red-500 text-white text-sm">
          BA
        </div>
      </div>
    </div>
  );
}

export default Header;

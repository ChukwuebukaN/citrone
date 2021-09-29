import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  /** Routes user back to home page */
  const handleHomeRoute = () => {
    history.push("/");
  };

  return (
    <div>
      <ul className="breadcrumb">
        <li>
          <button type="button" onClick={handleHomeRoute}>
            Home
          </button>
        </li>
        <li>
          <button type="button">Your Courses</button>
        </li>
        <li>Product Design</li>
      </ul>
    </div>
  );
}

export default Header;

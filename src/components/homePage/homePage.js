import React from "react";

function HomePage() {
  return (
    <div className="homepage-wrapper flex h-screen">
      <div className="m-auto">
        <div className="text-center text-8xl font-black">
          <h1>Welcome to Citrone</h1>
          <button type="button" className="enter-classroom-btn">
            Enter Classroom
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

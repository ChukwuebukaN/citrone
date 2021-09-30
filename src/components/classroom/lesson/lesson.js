import React from "react";

function Lesson() {
  /** Displays users lessons */
  const displayLesson = () => {
    return (
      <div className="mb-8 w-72 lg:w-64">
        <div className=" mb-4 rounded overflow-hidden cursor-pointer bg-red-100 px-4 py-2">
          <p>Lesson 1</p>
        </div>
        <div className=" mb-4 rounded overflow-hidden cursor-pointer bg-red-100 px-4 py-2">
          <p>Lesson 2</p>
        </div>
        <div className=" mb-4 rounded overflow-hidden cursor-pointer bg-red-100 px-4 py-2">
          <p>Lesson 3</p>
        </div>
      </div>
    );
  };

  return <div>{displayLesson()}</div>;
}

export default Lesson;

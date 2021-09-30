import React from "react";

function Lesson() {
  /** Reusable components for users lessons */
  // eslint-disable-next-line react/prop-types
  const LessonItem = ({ title = "" }) => (
    <div className=" mb-4 rounded overflow-hidden cursor-pointer bg-red-100 px-4 py-2">
      <p>{title}</p>
    </div>
  );

  /** Displays users lessons */
  const displayLesson = () => {
    return (
      <div className="mb-8 w-72 lg:w-64">
        <LessonItem title="Lesson 1" />
        <LessonItem title="Lesson 2" />
        <LessonItem title="Lesson 3" />
      </div>
    );
  };

  return <div>{displayLesson()}</div>;
}

export default Lesson;

import React from "react";
import CourseImage from "../img/course-image.jpg";
import { ReactComponent as CourseMenu } from "../img/course-menu.svg";

function Course() {
  return (
    <div>
      <div className="w-64 mb-4 rounded-lg overflow-hidden shadow-md bg-white cursor-pointer">
        <img src={CourseImage} className="w-full" alt="Description of course" />
        <div className="px-6 py-4">
          <div className="flex justify-between  ">
            <div className="font-bold text-xl mb-2">Product Design</div>
            <button type="button">
              <span>
                <CourseMenu className=" h-4 w-4 mb-2 right-0" />
              </span>
            </button>
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
          </p>
        </div>
      </div>
    </div>
  );
}

export default Course;

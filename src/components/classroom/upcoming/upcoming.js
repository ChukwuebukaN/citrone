import React from "react";
import { ReactComponent as UpcomingClock } from "../img/classroom-clock.svg";

function Upcoming() {
  /** Displays users upcoming */
  const displayUpcoming = () => {
    return (
      <div className="mb-4 w-64 lg:w-56 rounded-md bg-white border-2 border-gray-100">
        <p className="p-3 font-bold text-xl">Upcoming</p>
        <div className="border-t-2 p-4 ">
          <div className="mb-4">
            <div className=" mb-2 rounded overflow-hidden cursor-pointer flex items-center">
              <div className="rounded-full h-3 w-3 bg-red-500 mr-3" />
              <p className="font-bold text-base">Assignment 1</p>
            </div>
            <div className="flex ">
              <div className="flex">
                <UpcomingClock className="h-3 w-3  mx-2" />
                <p className="text-xs leading-4"> 12/02/2021 </p>
              </div>
              <div className="flex">
                <div className="rounded-full h-2 w-2 bg-gray-700 mx-2 mt-1 " />
                <p className="text-xs font-bold leading-4"> Product Design </p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className=" mb-2 rounded overflow-hidden cursor-pointer flex items-center ">
              <div className="rounded-full h-3 w-3 bg-red-500 mr-3" />
              <p className="font-bold text-base">Assignment 2</p>
            </div>
            <div className="flex ">
              <div className="flex">
                <UpcomingClock className="h-3 w-3  mx-2" />
                <p className="text-xs leading-4"> 12/02/2021 </p>
              </div>
              <div className="flex">
                <div className="rounded-full h-2 w-2 bg-gray-700 mx-2 mt-1 " />
                <p className="text-xs font-bold leading-4"> Product Design </p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className=" mb-2 rounded overflow-hidden cursor-pointer flex items-center ">
              <div className="rounded-full h-3 w-3 bg-red-500 mr-3" />
              <p className="font-bold text-base">Assignment 3</p>
            </div>
            <div className="flex ">
              <div className="flex">
                <UpcomingClock className="h-3 w-3  mx-2" />
                <p className="text-xs leading-4"> 12/02/2021 </p>
              </div>
              <div className="flex">
                <div className="rounded-full h-2 w-2 bg-gray-700 mx-2 mt-1 " />
                <p className="text-xs font-bold leading-4"> Product Design </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{displayUpcoming()}</div>;
}

export default Upcoming;

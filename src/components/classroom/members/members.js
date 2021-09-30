import React from "react";
import { ReactComponent as MembersChat } from "../img/members-chat.svg";

function Members() {
  /** Displays classroom members */
  const displayUpcoming = () => {
    return (
      <div className="mb-8 w-64 lg:w-56 rounded-md bg-white border-2 border-gray-100">
        <div className="flex justify-between border-b-2">
          <p className="p-3 font-bold text-xl ">Members</p>
          <button type="button" className="text-red-500 text-sm mr-4">
            View All
          </button>
        </div>
        <div className="pl-2 pr-2 pb-2 pt-4">
          <div className="flex justify-between">
            <div className=" mb-2 rounded overflow-hidden cursor-pointer flex items-center">
              <div className="rounded-full lg:h-8 lg:w-8 h-6 w-6 mr-4 flex items-center justify-center bg-red-500 text-white text-md">
                DC
              </div>
              <p className="font-bold text-base">Dave Chapelle</p>
            </div>
            <MembersChat className="mt-2 cursor-pointer" />
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <div className=" mb-2 rounded overflow-hidden cursor-pointer flex items-center">
              <div className="rounded-full lg:h-8 lg:w-8 h-6 w-6 mr-4 flex items-center justify-center bg-red-500 text-white text-md">
                DC
              </div>
              <p className="font-bold text-base">Dave Chapelle</p>
            </div>
            <MembersChat className="mt-2 cursor-pointer" />
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <div className=" mb-2 rounded overflow-hidden cursor-pointer flex items-center">
              <div className="rounded-full lg:h-8 lg:w-8 h-6 w-6 mr-4 flex items-center justify-center bg-red-500 text-white text-md">
                DC
              </div>
              <p className="font-bold text-base">Dave Chapelle</p>
            </div>
            <MembersChat className="mt-2 cursor-pointer" />
          </div>
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <div className=" mb-2 rounded overflow-hidden cursor-pointer flex items-center">
              <div className="rounded-full lg:h-8 lg:w-8 h-6 w-6 mr-4 flex items-center justify-center bg-red-500 text-white text-md">
                DC
              </div>
              <p className="font-bold text-base">Dave Chapelle</p>
            </div>
            <MembersChat className="mt-2 cursor-pointer" />
          </div>
        </div>
      </div>
    );
  };

  return <div>{displayUpcoming()}</div>;
}

export default Members;

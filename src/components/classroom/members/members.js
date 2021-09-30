import React from "react";
import { ReactComponent as MembersChat } from "../img/members-chat.svg";

function Members() {
  /** Reusable components for members item */
  // eslint-disable-next-line react/prop-types
  const MembersItem = ({ title = "" }) => (
    <div className="pl-2 pb-2 pt-4">
      <div className="flex justify-between">
        <div className="ml-2 mb-2 rounded overflow-hidden cursor-pointer flex items-center">
          <div className="text-xs rounded-full lg:h-8 lg:w-8 h-6 w-6 mr-2 flex items-center justify-center bg-red-500 text-white text-md">
            DC
          </div>
          <p className="font-bold text-base">{title}</p>
        </div>
        <MembersChat className="mt-2 mr-4 cursor-pointer" />
      </div>
    </div>
  );

  /** Displays classroom members */
  const displayUpcoming = () => {
    return (
      <div className="mb-8 w-72 lg:w-56 rounded-md bg-white border-2 border-gray-100">
        <div className="flex justify-between border-b-2">
          <p className="p-3 font-bold text-xl ">Members</p>
          <button type="button" className="text-red-500 text-sm mr-4">
            View All
          </button>
        </div>
        <MembersItem title="Dave Chapelle" />
        <MembersItem title="Dave Chapelle" />
        <MembersItem title="Dave Chapelle" />
        <MembersItem title="Dave Chapelle" />
      </div>
    );
  };

  return <div>{displayUpcoming()}</div>;
}

export default Members;

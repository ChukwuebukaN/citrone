import React from "react";
import { ReactComponent as LikePost } from "../img/like-post.svg";

function Post() {
  /** Displays message box */
  const displayMessageBox = () => {
    return (
      <div>
        <div className="mb-4 rounded border-2 border-gray-100 bg-white">
          <form>
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                className="w-64 h-24 lg:w-96 lg:h-28 resize-none outline-white py-2 px-4"
                placeholder="Type Message...."
              />
            </label>
          </form>
        </div>
      </div>
    );
  };

  /** Displays Posts box */
  const displayTeacherPost = () => {
    return (
      <div>
        <p className="mb-2 font-bold">Post</p>
        <div className="h-40 rounded border-2 border-gray-100 bg-white">
          <div className="px-2 py-2 lg:px-6 lg:py-4 flex justify-between">
            <div className="rounded-full lg:h-12 lg:w-12 h-8 w-8 flex items-center justify-center bg-red-500 text-white text-md">
              KJ
            </div>
            <p className="font-bold  lg:-ml-16">Mr K posted an Assignment</p>
            <button type="button">
              <span>
                <LikePost className="mt-2 lg:-mt-2 h-4 w-4 mb-2 right-0" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-8">
      {displayMessageBox()}
      {displayTeacherPost()}
    </div>
  );
}

export default Post;

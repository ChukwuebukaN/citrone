import React from "react";
import { ReactComponent as LikePost } from "../img/like-post.svg";
import { ReactComponent as PostClock } from "../img/classroom-clock.svg";

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

  /** Displays teachers post box */
  const displayTeacherPost = () => {
    return (
      <div>
        <p className="mb-2 font-bold">Posts</p>
        <div className="h-56 w-64 lg:h-64 lg:w-full rounded border-2 border-gray-100 bg-white">
          <div className="px-2 py-2 lg:px-6 lg:py-4 flex justify-between">
            <div className="rounded-full lg:h-12 lg:w-12 h-8 w-8 flex items-center justify-center bg-red-500 text-white text-md">
              KJ
            </div>
            <div>
              <p className="font-bold text-sm lg:text-base lg:-ml-16">
                Mr K posted an Assignment
              </p>
              <p className="text-xs lg:text-sm lg:-ml-16">Teacher</p>
            </div>
            <button type="button">
              <span>
                <LikePost className=" lg:-mt-2 h-4 w-4 mb-2 right-0" />
              </span>
            </button>
          </div>
          <div className="mb-4 h-20 w-52 lg:w-80 m-auto rounded border-2 border-gray-100 bg-white">
            <div className="px-2 py-2 lg:px-6 lg:py-4 flex justify-between">
              <div>
                <p className="font-bold text-sm mb-2">Assignment Title</p>
                <div className="flex">
                  <PostClock className="h-4 w-4 mr-2" />
                  <p className="text-sm leading-4"> 20/09/2021 </p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-red-100 text-red-500 font-bold rounded-md px-2  text-sm"
                >
                  Open
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-4 border-t-2 border-gray-100 bg-white">
            <div className="text-xs mr-4 rounded-full lg:h-10 lg:w-10 h-6 w-6 flex items-center justify-center bg-red-500 text-white text-md">
              BA
            </div>
            <div className="rounded border-2 border-gray-100 bg-white">
              <form>
                <label htmlFor="comment">
                  <textarea
                    id="comment"
                    name="message"
                    className="w-40 h-8 lg:w-64 lg:h-8 text-xs resize-none outline-white px-2 py-2"
                    placeholder="Write a comment..."
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-8 ">
      {displayMessageBox()}
      {displayTeacherPost()}
    </div>
  );
}

export default Post;

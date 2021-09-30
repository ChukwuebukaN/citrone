import React from "react";
import { ReactComponent as LikePost } from "../img/like-post.svg";
import { ReactComponent as PostClock } from "../img/classroom-clock.svg";
import { ReactComponent as SharePost } from "../img/student-share.svg";

function Post() {
  /** Displays message box */
  const displayMessageBox = () => {
    return (
      <div>
        <div className="mb-8 rounded border-2 border-gray-100 bg-white">
          <form>
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                className="w-full h-40 lg:h-28 resize-none outline-white py-2 px-4"
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
      <div className="mb-8">
        <p className="mb-4 font-bold">Posts</p>
        <div className="h-60 lg:h-64 lg:w-full rounded border-2 border-gray-100 bg-white">
          <div className="px-4 py-4 lg:px-6 lg:py-4 flex justify-between">
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
                <LikePost className=" -mt-4 h-4 w-4" />
              </span>
            </button>
          </div>
          <div className="mb-4 h-20 w-60 lg:w-96 m-auto rounded border-2 border-gray-100 bg-white">
            <div
              className="px-6 py-4
             lg:px-6 lg:py-4 flex justify-between"
            >
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
            <div className="text-xs mr-4 rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center bg-red-500 text-white text-md">
              BA
            </div>
            <div className="rounded border-2 border-gray-100 bg-white">
              <form>
                <label htmlFor="comment">
                  <textarea
                    id="comment"
                    name="message"
                    className="w-48 h-8 lg:w-80 lg:h-8 text-xs resize-none outline-white px-2 py-2"
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

  /** Displays student post box */
  const displayStudentPost = () => {
    return (
      <div className="mb-8">
        <div className="h-42 lg:h-42 mb-16 lg:w-full rounded border-2 border-gray-100 bg-white">
          <div className="px-4 py-4 lg:px-6 lg:py-4 flex justify-between">
            <div className="rounded-full mr-1 lg:h-12 lg:w-12 h-8 w-8 flex items-center justify-center bg-red-500 text-white text-md">
              JA
            </div>
            <div>
              <p className="font-bold text-sm lg:text-base lg:-ml-16  px-2">
                Joshua posted to Product Design
              </p>
              <p className="text-xs lg:text-sm lg:-ml-16 px-2">Student</p>
              <p className="text-base lg:text-lg lg:-ml-16 px-2 mt-4">
                Welcome to the class guys
              </p>
            </div>
            <button type="button">
              <span>
                <LikePost className=" -mt-10 h-4 w-4" />
              </span>
            </button>
          </div>
          <div className="mb-4 h-40 m-auto rounded border-t-2 border-gray-100 bg-white">
            <p className="ml-16 lg:ml-24 -mb-4 py-2 text-gray-200">Replies</p>
            <div className="px-4 py-4 lg:px-6 lg:py-4 flex justify-between">
              <div className="text-xs lg:text-md rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center bg-red-500 text-white">
                DC
              </div>
              <div className="lg:-ml-40 -ml-14">
                <p className="font-bold text-sm lg:text-base  ">
                  Dave Chapelle
                </p>
                <p className="text-base lg:text-md ">Jjjj</p>
              </div>
              <div className="flex">
                <button type="button">
                  <span>
                    <SharePost className="mr-4 -mt-10 h-4 w-4" />
                  </span>
                </button>
                <button type="button">
                  <span>
                    <LikePost className=" -mt-10 h-4 w-4" />
                  </span>
                </button>
              </div>
            </div>
            <div className="pl-6 pr-4 lg:pl-10 lg:pr-10 -mt-4 flex items-center justify-center pt-4  bg-white">
              <div className="text-xs mr-4 rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center bg-red-500 text-white text-md">
                BA
              </div>
              <div className="rounded border-2 border-gray-100 bg-white">
                <form>
                  <label htmlFor="comment2">
                    <textarea
                      id="comment2"
                      name="message"
                      className="w-48 h-8 lg:w-80 lg:h-8 text-xs resize-none outline-white px-2 py-2"
                      placeholder="Write a comment..."
                    />
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-center pt-4 border-t-2 border-gray-100 bg-white">
            <div className="text-xs mr-4 rounded-full lg:h-10 lg:w-10 h-8 w-8 flex items-center justify-center bg-red-500 text-white text-md">
              BA
            </div>
            <div className="rounded border-2 border-gray-100 bg-white">
              <form>
                <label htmlFor="comment3">
                  <textarea
                    id="comment3"
                    name="message"
                    className="w-48 h-8 lg:w-80 lg:h-8 text-xs resize-none outline-white px-2 py-2"
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
    <div className="post mb-8 lg:ml-4">
      {displayMessageBox()}
      {displayTeacherPost()}
      {displayStudentPost()}
    </div>
  );
}

export default Post;

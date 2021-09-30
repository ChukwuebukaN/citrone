import React, { useEffect } from "react";
import Header from "../header/header";
import Breadcrumbs from "./breadcrumbs/breadcrumbs";
import { ReactComponent as CitroneBgUp } from "../img/citrone-bgup.svg";
import { ReactComponent as CitroneBgDown } from "../img/citrone-bgdown.svg";
import Course from "./course/course";
import Lesson from "./lesson/lesson";
import Post from "./post/post";
import Upcoming from "./upcoming/upcoming";
import Members from "./members/members";

function Classroom() {
  /** Page title */
  useEffect(() => {
    const ac = new AbortController();
    document.title = "Citrone • Classroom";

    return function cleanup() {
      ac.abort();
    };
  }, []);

  return (
    <div>
      <Header className="" />
      <CitroneBgUp className="citrone-bg absolute right-0" />
      <CitroneBgDown className="citrone-bg fixed  bottom-0 left-0" />
      <nav>
        <Breadcrumbs className="" />
      </nav>
      <section className=" ">
        <div className="m-auto">
          <div className="grid justify-items-center lg:grid-cols-3">
            <section>
              <Course />
              <Lesson />
            </section>
            <section>
              <Post />
            </section>
            <section>
              <Upcoming />
              <Members />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Classroom;

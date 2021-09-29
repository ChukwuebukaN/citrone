import React, { useEffect } from "react";
import Header from "../header/header";
import Breadcrumbs from "./breadcrumbs/breadcrumbs";
import { ReactComponent as CitroneBgUp } from "../svg/citrone-bgup.svg";
import { ReactComponent as CitroneBgDown } from "../svg/citrone-bgdown.svg";
import Course from "./course/course";
import Lesson from "./lesson/lesson";
import Post from "./post/post";

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
      <CitroneBgDown className="citrone-bg absolute bottom-0 left-0" />
      <nav>
        <Breadcrumbs className="" />
      </nav>
      <section className=" flex">
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
              <Lesson />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Classroom;

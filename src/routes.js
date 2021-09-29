import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";

const lazyClassroom = React.lazy(() =>
  import("./components/classroom/classroom")
);

function Routes() {
  return (
    <React.Suspense fallback="Loading...">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/classroom" component={lazyClassroom} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
}
export default Routes;

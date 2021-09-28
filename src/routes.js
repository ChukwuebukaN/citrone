import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/homePage/homePage";

const lazyClassroom = React.lazy(() =>
  import("./components/classroom/classroom")
);

function Routes() {
  return (
    <React.Suspense fallback="Loading...">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/CreateSchedule" component={lazyClassroom} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
}
export default Routes;

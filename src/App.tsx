import { LeftNavigatorMenu } from "@/features/LeftNavigatorMenu/LeftNavigatorMenu";
import React from "react";

export const App = React.memo(() => {
  return (
    <div className="App">
      <LeftNavigatorMenu></LeftNavigatorMenu>
    </div>
  );
});
App.displayName = "App";

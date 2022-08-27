import React from "react";
import { Iroutes } from "@/routes";
import { displayRouteMenu, RenderRoutes } from "@/helpers/routeHelpers";

interface NavigatorProps {
  routes: Iroutes[];
}
export const Navigator = ({ routes }: NavigatorProps) => {
  return (
    <div>
      <div className="routes">{displayRouteMenu(routes)}</div>
      <div>
        <RenderRoutes routes={routes} />
      </div>
    </div>
  );
};

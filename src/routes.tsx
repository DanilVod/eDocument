import React from "react";
import DashboardIcon from "@/assets/dashboard.svg?component";
import ContactsIcon from "@/assets/contacts.svg?component";

const Error = React.lazy(() => import("@/pages/Error/Error"));
const Contacts = React.lazy(() => import("@/pages/Contacts/Contacts"));
const Dashboard = React.lazy(() => import("@/pages/Dashboard/Dashboard"));

export interface Iroutes {
  name: string;
  path: string;
  element: JSX.Element;
  isHidden?: boolean;

  routes?: Iroutes[];
  icon?: JSX.Element;
}
export const ROUTES: Iroutes[] = [
  {
    name: "Dashboard",
    path: "/",
    element: <Dashboard />,
    icon: <DashboardIcon />,
  },
  {
    name: "Contacts",
    path: "/contacts",
    element: <Contacts />,
    icon: <ContactsIcon />,
  },
  {
    name: "Error",
    path: "/*",
    element: <Error />,
    isHidden: true,
  },
];

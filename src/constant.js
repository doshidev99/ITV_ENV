import { ReactComponent as Dashboard } from "assets/images/icon/Activity.svg";
import { ReactComponent as Project } from "assets/images/icon/folders.svg";
import { ReactComponent as Share } from "assets/images/icon/Group.svg";

export const menuMapping = [
  {
    path: "/",
    prefix: <Dashboard />,
    name: "Dashboard",
  },
  {
    path: "/project",
    prefix: <Project />,
    name: "My Project",
  },
  {
    path: "/share",
    prefix: <Share />,
    name: "Share with me",
  },
];

/**
 * @PATH is routes
 */
export const PATH = {
  dashboard: "/",
  login: "/login",
  register: "/register",
  myProject: "/project",
};

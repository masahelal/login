import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { MdOutlineModelTraining } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
export const SidebarData = [
  {
    title: "Trainings",
    path: "/Trainings",
    icon: <MdOutlineModelTraining />,
    cName: "side-text",
  },
  {
    title: "Users",
    path: "/Users",
    icon: <FaUsers />,
    cName: "side-text",
  },
];

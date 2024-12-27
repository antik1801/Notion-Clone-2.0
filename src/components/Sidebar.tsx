"use client";
import React from "react";

import SidebarSheet from "./SidebarSheet";
import MenuOptions from "./MenuOptions";


const Sidebar = () => {
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
        <SidebarSheet />
      <div className="hidden md:inline">
        <MenuOptions />
      </div>
    </div>
  );
};

export default Sidebar;

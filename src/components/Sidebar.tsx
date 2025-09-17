import React from "react";
import { AccountToggle } from "./SidebarComponent.tsx/AccountToggle";
import { Search } from "./SidebarComponent.tsx/Search";
import { RouteSelect } from "./SidebarComponent.tsx/RouteSelect";
import { Plan } from "./SidebarComponent.tsx/Plan";

export const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>
      <Plan />
    </div>
  );
};

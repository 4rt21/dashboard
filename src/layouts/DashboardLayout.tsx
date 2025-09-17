import React from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout(children: React.ReactNode) {

  
  return (
    <div className='bg-white rounded-lg pb-4 shadow'>
      <Outlet />
    </div>
  );
}

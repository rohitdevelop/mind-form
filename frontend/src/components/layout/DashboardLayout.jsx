import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="layout-body">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}

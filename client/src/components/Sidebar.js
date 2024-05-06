import React, { useState } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidenav_item">
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="sidenav_item">
        <Link to="/events/management">Events Management</Link>
      </div>
      <div className="sidenav_item">
        <Link to="/members/management">Members Management</Link>
      </div>
    </div>
  );
};

export default Sidebar;

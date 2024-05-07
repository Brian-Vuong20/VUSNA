import React from "react";
import Sidebar from "./Sidebar";
import { FaCalendarCheck } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="admin_content">
      <Sidebar />
      <div className="admin_body">
        <div className="event_detail_container">
          <h3>Events details</h3>
          <div className="event_card">
            <div className="event_opened">
              <div className="event_opened_detail">
                <MdOutlinePendingActions size={25} />
                <h4>10</h4>
                <p>Events opened</p>
              </div>
            </div>
            <div className="event_closed">
              <div className="event_closed_detail">
                <FaCalendarCheck size={25} />
                <h4>20</h4>
                <p>Events finished</p>
              </div>
            </div>
          </div>
        </div>

        <div className="member_container">
          <h3>Active Member</h3>
          <div className="active_member_card">
            <div className="active_member">
              <FaRegUser size={30} style={{ marginBottom: "1rem" }} />
              <h4>1200 members</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

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
        <div className="event_detail_card">
          <h3>Events details</h3>
          <div className="admin_event_detail">
            <div className="event_opened">
              <div className="event_opened_detail">
                <MdOutlinePendingActions
                  size={30}
                  style={{ marginBottom: "1rem" }}
                />
                <h4>10</h4>
                <p>Events opened</p>
              </div>
            </div>
            <div className="event_closed">
              <div className="event_closed_detail">
                <FaCalendarCheck size={25} style={{ marginBottom: "1rem" }} />
                <h4>20</h4>
                <p>Events finished</p>
              </div>
            </div>
          </div>
        </div>

        <div className="admin_member_detail">
          <div className="active_member">
            <h3>Active Member</h3>
            <div className="active_member_container">
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

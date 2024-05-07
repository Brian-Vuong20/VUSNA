import React from "react";
import Sidebar from "./Sidebar";
import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
const Members = () => {
  return (
    <div className="admin_content">
      <Sidebar />
      <div className="dashboard_content">
        <div className="member_list">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Member fullname</th>
                <th>Member email</th>
                <th>Registered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <Link to="/add/events">
                  <Button variant="primary">Activate</Button>
                </Link>
                <Link to="/add/events">
                  <Button variant="primary">Detail</Button>
                </Link>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Members;

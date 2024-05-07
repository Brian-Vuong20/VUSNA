import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const EventsManagement = () => {
  return (
    <div className="admin_content">
      <Sidebar />
      <div className="event_table">
        <div className="event_list">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Event name</th>
                <th>Event location</th>
                <th>Event time</th>
                <th>Modification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div className="">
                    <Link to="/add/events">
                      <Button variant="primary" className="event_button">
                        Update
                      </Button>
                    </Link>
                    <Link to="/add/events">
                      <Button variant="danger">Delete</Button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <Link to="/add/events">
            <Button variant="primary">Add event</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsManagement;

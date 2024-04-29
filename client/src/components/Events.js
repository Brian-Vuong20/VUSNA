import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Events = () => {
  let [events, setEvents] = useState([1, 2, 3, 5, 6, 7, 8]);
  return (
    <div className="grid-container">
      {events.map((event) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="image/images.jpeg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Events;

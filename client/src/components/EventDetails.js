import React from "react";
import Image from "react-bootstrap/Image";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlineSubtitles } from "react-icons/md";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const EventDetails = () => {
  return (
    <div>
      <Image
        src="/image/gradient_background.jpg"
        className="gradient_background"
      />
      <div className="event_container">
        <div className="events_description">
          <div className="events_overview">
            <h2>Overview</h2>
          </div>
          <div className="events_details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              elementum mauris vel mauris cursus fringilla. Ut posuere pretium
              orci in luctus. Curabitur vel turpis et orci ultrices eleifend.
              Proin id ante neque. Pellentesque placerat volutpat magna, non
              euismod neque auctor sed. Vivamus eget diam eu ligula efficitur
              rutrum et quis sem. Fusce a euismod est. Nulla et dapibus tortor.
              Vivamus eu faucibus ipsum, eu feugiat dolor. Cras sodales, orci
              eget malesuada dignissim, ipsum tellus tincidunt urna, id
              ullamcorper nunc ante a dolor. Suspendisse potenti. Mauris
              faucibus sapien semper ipsum consectetur elementum. Phasellus
              pretium, lorem in bibendum viverra, neque velit mattis diam, et
              porttitor turpis mauris vel justo. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Duis neque lorem, imperdiet tincidunt mauris vitae, sagittis
              porttitor quam.
            </p>
          </div>
        </div>
        <div className="event_time">
          <div className="sub_details">
            <MdOutlineSubtitles size={25} className="icon" />
            <span>Event: Free BBQ</span>
          </div>
          <div className="sub_details">
            <IoMdTime size={25} className="icon" />
            <span>Time: Free BBQ</span>
          </div>
          <div className="sub_details">
            <MdDateRange size={25} className="icon" />
            <span>Date: 5th April 2024</span>
          </div>
          <div className="sub_details">
            <CiLocationOn size={25} className="icon" />
            <span>Location: 123 High St Preston 3064 King Park</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

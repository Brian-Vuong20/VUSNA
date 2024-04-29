import React from "react";
import Image from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="about_us_container">
      <div className="about_overview">
        <h2>About us</h2>
        <div className="about_detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt libero vitae vehicula vestibulum. Phasellus euismod nisi
          odio, id accumsan magna mattis non. Nunc ut magna mollis, egestas
          ipsum varius, congue massa. Ut magna odio, venenatis et facilisis sed,
          gravida a massa. Donec quis ante luctus, accumsan tellus ac, facilisis
          ex. Proin magna metus, ultricies ac dolor a, condimentum mollis
          tellus. Vestibulum eget imperdiet sapien, hendrerit commodo magna.
          Etiam nec quam et libero auctor lobortis ut sed sapien. Etiam laoreet
          faucibus mollis. Duis lobortis mi ultrices nulla feugiat venenatis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nunc euismod leo in rutrum commodo. Nullam in
          turpis ultrices nunc mollis
        </div>
      </div>
      <h4 className="our_team_text">Meet our team</h4>
      <div className="about_members">
        <div className="member_card">
          <Image src="/image/images.jpeg" className="member_image" />
          <h4>John Doe</h4>
          <p>Victoria University</p>
          <p className="member_detail">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt libero vitae vehicula vestibulum. Phasellus euismod nisi
            odio, id accumsan magna mattis non
          </p>
          <div className="social_media_link">
            <Link to="/" className="icon_link">
              <CiFacebook size={40} />
            </Link>
            <Link to="/" className="icon_link">
              <FaInstagram size={40} />
            </Link>
            <Link to="/" className="icon_link">
              <FaLinkedinIn size={40} />
            </Link>
          </div>
        </div>
        <div className="member_card">
          <Image src="/image/images.jpeg" className="member_image" />
          <h4>John Doe</h4>
          <p>Victoria University</p>
          <p className="member_detail">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt libero vitae vehicula vestibulum. Phasellus euismod nisi
            odio, id accumsan magna mattis non
          </p>
          <div className="social_media_link">
            <Link to="/" className="icon_link">
              <CiFacebook size={40} />
            </Link>
            <Link to="/" className="icon_link">
              <FaInstagram size={40} />
            </Link>
            <Link to="/" className="icon_link">
              <FaLinkedinIn size={40} />
            </Link>
          </div>
        </div>
        <div className="member_card">
          <Image src="/image/images.jpeg" className="member_image" />
          <h4>John Doe</h4>
          <p>Victoria University</p>
          <p className="member_detail">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt libero vitae vehicula vestibulum. Phasellus euismod nisi
            odio, id accumsan magna mattis non
          </p>
          <div className="social_media_link">
            <Link to="/" className="icon_link">
              <CiFacebook size={40} />
            </Link>
            <Link to="/" className="icon_link">
              <FaInstagram size={40} />
            </Link>
            <Link to="/" className="icon_link">
              <FaLinkedinIn size={40} />
            </Link>
          </div>
        </div>
        <div className="member_card">
          <Image src="/image/images.jpeg" className="member_image" />
          <h4>John Doe</h4>
          <p>Victoria University</p>
          <p className="member_detail">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt libero vitae vehicula vestibulum. Phasellus euismod nisi
            odio, id accumsan magna mattis non
          </p>
          <div className="social_media_link">
            <Link to="/" className="icon_link">
              <CiFacebook size={40} />
            </Link>
            <Link to="/" className="icon_link">
              <FaInstagram size={40} />
            </Link>
            <Link to="/" className="icon_link">
              <FaLinkedinIn size={40} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

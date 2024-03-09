import React from "react";
import playStore from "../images/playstore.png";
import appStore from "../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div class="midFooter">
        <h1>Tshirt_Hvn.</h1>
        <p>High Quality is our first priority</p>
        <p>Copyright 2024 &copy; Tshirt_Hvn</p>
      </div>

      <div class="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/accounts/login/?hl=en ">Instagram</a>

        <a href="https://www.youtube.com/account">Youtube</a>

        <a href="https://www.facebook.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;

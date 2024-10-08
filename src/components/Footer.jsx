import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/re_yyyu/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/Yurey_OV/" target="_blank" rel="noopener noreferrer">
          <XIcon />
        </a>
        <a href="https://www.facebook.com/yurey.oclarit/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
          <LinkedInIcon />
      </div>
      <p> &copy; 2021 yureydessert.com</p>
    </div>
  );
}


export default Footer;
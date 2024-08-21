import React from "react";
import "./Hero.css";
import profile_img from "../../assets/self-image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  let resumeUrl =
    "https://drive.google.com/file/d/1w1CY_eC-hcavIWNJEEgzlU5MM10HRsOT/view?usp=drive_link";

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>I'm Amandeep Saini,</span> frontend developer based in Navi
        Mumbai.
      </h1>
      <p>
        I specialize in creating stunning UI designs using React.js and Next.js,
        with expert-level frontend development skills.
      </p>
      <div className="hero-action">
        {/* <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div> */}
        <div
          onClick={() => {
            window.open(resumeUrl, "_blank");
          }}
          className="hero-resume"
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;

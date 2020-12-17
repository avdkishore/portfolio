import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { workExperience, achievementSection, blogSection, talkSection } from "../../portfolio";


const Header = React.forwardRef((props, ref) => {
  const { isDark } = useContext(StyleContext);
  const showExperience = workExperience.showExperience;
  const showAchievements = achievementSection.showAchievements;
  const showBlogs = blogSection.showBlogs;
  const showTalks = talkSection.showTalks;
  
  return (
    <Headroom ref={ref}>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          {/* <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span> */}
          <img 
            style={{ width: '3rem', height: '3rem' }}
            src={require(`../../assets/images/logo.png`)} 
            alt="kishore's logo"/>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#skills">Skills</a>
          </li>
          {showExperience && (
            <li>
              <a href="#experience">Work Experience</a>
            </li>
          )}
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          {
            showAchievements && (
              <li>
                <a href="#achievements">Achievements</a>
              </li>
            )
          }
          {
            showBlogs && (
              <li>
                <a href="#blogs">Blogs</a>
              </li>
            )
          }
          {
            showTalks && (
              <li>
                <a href="#talks">Talks</a>
              </li>
            )
          }
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* <a> */}
              <ToggleSwitch />
            {/* </a> */}
          </li>
        </ul>
      </header>
    </Headroom>
  );
});

export default Header;

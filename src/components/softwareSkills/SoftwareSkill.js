import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            const component = (
              <li className="software-skill-inline" name={skills.skillName}>
                {/* <i className={skills.fontAwesomeClassname}></i> */}
                <img src={skills.image} alt="skill" style={{ width: '5rem', height: '5rem', objectFit: 'contain' }}/>
                <p className="software-skill-name">{skills.skillName}</p>
              </li>
            );

            return component;
          })}
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import Members from "../Members";
import { Grid } from "@material-ui/core";
import cross from '../../../images/about/icon-plus.svg';

function IR({ member, index, toggleTEAM }) {

    const IRTeam = [
      {
        id: "esther",
        name: "Esther Liu",
        role: "Industry Relations Director",
        link: "https://www.linkedin.com/in/esther--liu",
        gradYear: 2025,
        gif: "",
      },
      {
        id: "maria",
        name: "Maria Dhilla",
        role: "Senior Advisor",
        link: "https://mariadhilla.myportfolio.com/",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837979/designco/about/team-gifs/maria_ew1spu.gif",
      },
      {
        id: "catherine",
        name: "Catherine Oei",
        role: "Industry Relations Coordinator",
        link: "https://www.linkedin.com/in/catherine-oei/",
        gradYear: 2023,
        gif: "",
      },
      {
        id: "elise",
        name: "Elise Kim",
        role: "Industry Relations Coordinator",
        link: "https://www.linkedin.com/in/elisekim999/",
        gradYear: 2025,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837886/designco/about/team-gifs/elise_kvjf38.gif",
      },
    ]

  return (
    <div>
        <div 
            className="team-border"
            key={index}
            onClick={() => toggleTEAM(index)}
        >
            <div className="team-container-top">
                <div className="team-title">{member.team}</div>
                <img className={"team-cross" + (member.open ? "-open" : "")} src={cross}  />
            </div>
        </div>
        <div className={"team " + (member.open ? "open" : "")}>
            <div className="team-border-container">
                <div className="team-container">
                    <div className="gridContainer" >
                        {IRTeam.map((item) => (
                          <div className="team-card">
                            <a href={item.link} target="_blank">
                              <img className="team-card-image" src={require(`../../../images/about/team-photos/${item.id}.png`).default} alt="" />
                            </a>
                            <div className="team-card-name">{item.name}</div>
                            <div className="team-card-title">{item.role}</div>
                            <div className="team-card-year">{item.gradYear}</div>
                          </div>
                        ))}
                    </div>
                </div>     
            </div>
        </div>
    </div>
  );
}

export default IR;
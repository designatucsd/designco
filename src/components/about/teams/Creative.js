import React from "react";
import Members from "../Members";
import { Grid } from "@material-ui/core";
import cross from '../../../images/about/icon-plus.svg';

function Creative({ member, index, toggleTEAM }) {

    const CreativeTeam = [
      {
        id: "megan",
        name: "Megan Tan",
        role: "Co-Creative Director",
        link: "http://linkedin.com/in/megan-tan-31a2471a5",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837980/designco/about/team-gifs/megan_cpulwb.gif",
      },
      {
        id: "juna",
        name: "Juna Kim",
        role: "Co-Creative Director",
        link: "https://www.junakim.design",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837926/designco/about/team-gifs/juna_lsgx1m.gif",
      },
      {
        id: "leann",
        name: "Leann Gamboa",
        role: "Visual + Brand Designer, Web Developer",
        link: "https://www.linkedin.com/in/leanngamboa/",
        gradYear: 2022,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837972/designco/about/team-gifs/leann_ijibfs.gif",
      },
      {
        id: "ricky",
        name: "Ricardo Sedano",
        role: "Visual + Brand Designer",
        link: "linkedin.com/in/ricardo-sedano",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837932/designco/about/team-gifs/ricky_ennyxu.gif",
      },
      {
        id: "thoa",
        name: "Thoa Nguyen",
        role: "Visual + Brand Designer",
        link: "https://www.linkedin.com/in/thoa-nguyen-99a473217/",
        gradYear: 2025,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837874/designco/about/team-gifs/thoa_irqejb.gif",
      },
      {
        id: "shawn",
        name: "Shawn Kim",
        role: "Web Dev Lead",
        link: "https://www.linkedin.com/in/shawn-j-kim/",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663831878/designco/about/team-gifs/shawn_up1ai3.gif",
      },
      {
        id: "meshach",
        name: "Meshach Adoe",
        role: "Web Developer",
        link: "https://www.linkedin.com/in/meshachadoe",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837984/designco/about/team-gifs/meshach_oujofy.gif",
      },
      {
        id: "tracey",
        name: "Tracey Du",
        role: "Web Developer",
        link: "https://www.linkedin.com/in/traceydu/",
        gradYear: 2024,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837866/designco/about/team-gifs/tracey_jwzaar.gif",
      },
      {
        id: "brian",
        name: "Brian Liu",
        role: "Web Developer",
        link: "https://brianliu1.myportfolio.com",
        gradYear: 2024,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837867/designco/about/team-gifs/brian_figech.gif",
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
                        {CreativeTeam.map((item) => (
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

export default Creative;
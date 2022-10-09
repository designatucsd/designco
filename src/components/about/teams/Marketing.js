import React from "react";
import Members from "../Members";
import { Grid } from "@material-ui/core";
import cross from '../../../images/about/icon-plus.svg';

function Marketing({ member, index, toggleTEAM }) {

    const MarketingTeam = [
      {
        id: "tiffany",
        name: "Tiffany Zhong",
        role: "Co-Marketing Director",
        link: "https://www.linkedin.com/in/tiffany-zhong-2841a718b/",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837948/designco/about/team-gifs/tiffany_zsbavy.gif",
      },
      {
        id: "emilyjao",
        name: "Emily Jao",
        role: "Co-Marketing Director",
        link: "https://emilysjao.wixsite.com/my-site",
        gradYear: 2024,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837888/designco/about/team-gifs/emilyjao_t51mwq.gif",
      },
      {
        id: "frances",
        name: "Frances Sy",
        role: "Social Media Coordinator",
        link: "https://www.linkedin.com/in/frances-sy/",
        gradYear: 2025,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663831907/designco/about/team-gifs/frances_keifip.gif",
      },
      {
        id: "hannah",
        name: "Hannah Yick",
        role: "Content Strategist/Writer",
        link: "https://www.linkedin.com/in/hannahyick/",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837899/designco/about/team-gifs/hannah_a8eu18.gif",
      },
      {
        id: "kayla",
        name: "Kayla Luong",
        role: "Content Strategist/Writer",
        link: "https://www.linkedin.com/in/kayla-l-a12641199/",
        gradYear: 2024,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837920/designco/about/team-gifs/kayla_zf0mgd.gif",
      },
      {
        id: "rainee",
        name: "Rainee Pei",
        role: "Media Coordinator",
        link: "https://www.raineepei.com/",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837933/designco/about/team-gifs/rainee_btufff.gif",
      },
      {
        id: "brian",
        name: "Brian Liu",
        role: "Media Coordinator",
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
                        {MarketingTeam.map((item) => (
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

export default Marketing;
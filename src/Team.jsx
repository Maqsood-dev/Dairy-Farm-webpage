import React from "react";
import "./Team.css"; 
import des from './assets/janzaib.jpg'
import manager from './assets/rana.jpg'
import Software from './assets/maqsood.jpg'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Maqsood Jakhro",
      imgSrc: Software,
      role: "Software Engineer",
    },
    {
      id: 2,
      name: "Rana Asawar",
      imgSrc: manager,
      role: "Project Manager",
    },
    {
      id: 3,
      name: "Janzaib Sheikh",
      imgSrc: des,
      role: "Designer",
    },
  ];

  return (
    <div className="team-container">
        <h3 id="ser">Team</h3>
      <h1 className="team-heading">Experienced<br/> Team Members</h1>
      <div className="team-cards">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <img
              src={member.imgSrc}
              alt={member.name}
              className="team-card-img"
            />
            <h3 className="team-card-name">{member.name}</h3>
            <p className="team-card-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

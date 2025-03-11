import React from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ member }) => {
    return (
        <div className="team-card">
            <img 
                src={member.image} 
                alt={member.name} 
                className="team-image" 
            />
            <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;

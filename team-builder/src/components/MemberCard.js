import React from "react";
import "./MemberCard.css";

const MemberCard = props => {
  return (
    <>
      {props.members.map(members => (
        <div className="member" key={members.id}>
          <h2>{members.name}</h2>
          <p>{members.email}</p>
          <p>{members.role}</p>
        </div>
      ))}
    </>
  );
};

export default MemberCard;

import Member from "./components/TeamMember";
import MemberCard from "./components/MemberCard";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Dan",
      email: "dbriksza@gmail.com ",
      role: "the greatest"
    }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };
  return (
    <div className="App">
      <h1>Members</h1>
      <Member addNewMember={addNewMember} />
      <MemberCard members={members} />
    </div>
  );
}

export default App;

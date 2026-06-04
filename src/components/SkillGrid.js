import React from "react";
 
const skillStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "8px",
  },
  card: {
    background: "#f5f5f5",
    borderRadius: "8px",
    padding: "10px 12px",
    border: "0.5px solid #e0e0e0",
  },
  name: {
    fontSize: "13px",
    fontWeight: 500,
    color: "#1a1a1a",
    marginBottom: "2px",
  },
  level: {
    fontSize: "11px",
    color: "#9e9e9e",
  },
};
 
export default function SkillGrid({ items }) {
  return (
    <div style={skillStyles.grid}>
      {items.map((skill, i) => (
        <div key={i} style={skillStyles.card}>
          <p style={skillStyles.name}>{skill.title}</p>
          <p style={skillStyles.level}>{skill.desc}</p>
        </div>
      ))}
    </div>
  );
}

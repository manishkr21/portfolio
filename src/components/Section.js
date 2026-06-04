import React from "react";
 
const sectionStyles = {
  wrapper: { marginBottom: "2rem" },
  title: {
    fontSize: "13px",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#9e9e9e",
    marginBottom: "1rem",
  },
};
 
export default function Section({ title, children }) {
  return (
    <div style={sectionStyles.wrapper}>
      <p style={sectionStyles.title}>{title}</p>
      {children}
      
    </div>
  );
}

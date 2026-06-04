import React from "react";
import Timeline from "./components/Timeline";
import Section from "./components/Section";
// import { current, projects, skills } from {"./data/current", "./data/projects", "./data/skills"};
import current from "./data/current.json";
import projects from "./data/projects.json";
import skills from "./data/skills.json";
import SkillGrid from "./components/SkillGrid";
import metadata from "./data/metadata.json";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import experience from "./data/experience.json";

const data = {
  metadata,
  current,
  projects,
  // publications,
  experience,
  skills
};

const appStyles = {
  root: {
    maxWidth: "980px",
    margin: "0 auto",
    padding: "2rem 1.5rem",
    fontFamily: "system-ui, sans-serif",
  },
  header: {
    marginBottom: "2.5rem",
    paddingBottom: "1.5rem",
    borderBottom: "0.5px solid #e0e0e0",
  },
  name: {
    fontSize: "22px",
    fontWeight: 500,
    color: "#1a1a1a",
    marginBottom: "6px",
  },
  role: {
    fontSize: "14px",
    color: "#757575",
    marginBottom: "12px",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "14px",
  },
  tag: {
    fontSize: "14px",
    padding: "3px 10px",
    borderRadius: "8px",
    background: "#f5f5f5",
    color: "#757575",
    border: "0.5px solid #e0e0e0",
  },
  contactRow: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    color: "#757575",
  },
};

export default function App() {
  return (
    <div style={appStyles.root}>
      <header style={appStyles.header}>
        <h1 style={appStyles.name}>{data.metadata.name}</h1>
        <p style={appStyles.role}>{data.metadata.role}</p>
        <div style={appStyles.tags}>
          {data.metadata.tags.map((tag, i) => (
            <span key={i} style={appStyles.tag}>{tag}</span>
          ))}
        </div>
        <div style={appStyles.contactRow}>
          <span style={appStyles.contactItem}><LocationPinIcon /> {data.metadata.location}</span>
          <span style={appStyles.contactItem}><MailIcon /> {data.metadata.email}</span>
          <span style={appStyles.contactItem}><GitHubIcon style={{cursor: "pointer" }} onClick={() => window.open(data.metadata.github, '_blank')} /> {data.metadata.github}</span>
        </div>
      </header>

      <Section title="Experience">
        <Timeline items={data.experience} />
      </Section>

      <Section title="Projects">
        <Timeline items={data.projects} />
      </Section>

      {/* <Section title="Publications">
        <Timeline items={data.publications} />
      </Section> */}

      <Section title="Skills">
        <SkillGrid items={data.skills} />
      </Section>
    </div>
  );
}

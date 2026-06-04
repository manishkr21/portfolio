// export default function Timeline({ items }) {
//   return (
//     <div className="border-l-2 border-gray-300 pl-4">
//       {items.map((item, index) => (
//         <div key={index} className="mb-6">
//           <div className="text-sm text-gray-500">{item.date}</div>
//           <div className="font-semibold">{item.title}</div>
//           <div className="text-gray-600">{item.desc}</div>
//         </div>
//       ))}
//     </div>
//   );
// }
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";

const timelineStyles = {
  wrapper: {
    borderLeft: "1.5px solid #e0e0e0",
    paddingLeft: "1.25rem",
  },
  item: {
    position: "relative",
    marginBottom: "1.25rem",
  },
  dot: {
    position: "absolute",
    left: "-1.6rem",
    top: "6px",
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#fff",
    border: "1.5px solid #bdbdbd",
  },
  header: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: "8px",
    marginBottom: "3px",
  },
  title: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#1a1a1a",
  },
  date: {
    fontSize: "12px",
    color: "#9e9e9e",
    whiteSpace: "nowrap",
  },
  desc: {
    fontSize: "13px",
    color: "#616161",
    lineHeight: 1.6,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "14px",
  },
  tag: {
    fontSize: "12px",
    padding: "3px 10px",
    borderRadius: "8px",
    background: "#f5f5f5",
    color: "#757575",
    border: "0.5px solid #e0e0e0",
  }
};

export default function Timeline({ items }) {
  return (
    <div style={timelineStyles.wrapper}>
      {items.map((item, i) => (
        <div key={i} style={{ ...timelineStyles.item, marginBottom: i === items.length - 1 ? 0 : "1.25rem" }}>
          <div style={timelineStyles.dot} />
          <div style={timelineStyles.header}>
            <span style={timelineStyles.title}>{item.title}<GitHubIcon style={{ fontSize: "1rem", marginLeft: "0.5rem", cursor: "pointer" }} onClick={() => window.open(item.github_link, '_blank')} /></span>
            <span style={timelineStyles.date}>{item.date}</span>
          </div>
          <p style={timelineStyles.desc}>{item.desc}</p>

          {/* add section for skills if item has skills field */}
          {item.skills && item.skills.length > 0 && (
            <div style={timelineStyles.tags}>
              {item.skills.map((skill, index) => (
                <span key={index} style={timelineStyles.tag}>
                  {skill}
                </span>
              ))}
            </div>
          )}

        </div>
        // add section for skills if item has skills field

      ))}
    </div>
  );
}

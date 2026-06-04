import { Button, Box } from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";

export default function PillButton({
  label = "Feedback",
  icon = <FeedbackIcon />,
  onClick = () => {},
  bgColor = "#0f172a",
  hoverColor = "#1e293b",
  iconBg = "#3b82f6",
  textColor = "#cbd5f5",
}) {
  return (
    <Button
      onClick={onClick}
      startIcon={
        <Box
          sx={{
            backgroundColor: iconBg,
            borderRadius: "6px",
            p: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
      }
      sx={{
        borderRadius: "999px",
        textTransform: "none",
        px: 3,
        py: 1,
        border: "1px solid #334155",
        color: textColor,
        backgroundColor: bgColor,
        fontWeight: 500,
        fontSize: "16px",
        "&:hover": {
          backgroundColor: hoverColor,
        },
      }}
    >
      {label}
    </Button>
  );
}
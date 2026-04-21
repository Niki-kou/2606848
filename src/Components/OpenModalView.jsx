import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function OpenModalView({ title, excerpt, image, onOpen }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 1,
        bgcolor: "#cccdcc",
        boxShadow: "0 10px 24px rgba(39, 44, 42, 0.1)",
        transition: "transform 0.24s ease-in-out",
        '&:hover': {
          transform: 'scale(1.02)'
        },
      }}
    >
      <CardActionArea onClick={onOpen} sx={{ height: "100%", alignItems: "stretch" }}>
        <div style={{
          position: "absolute",
          right: 10,
          top: 10,
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          borderRadius: 999,
          padding: 8,
        }}>
          <FaArrowUpRightFromSquare color="#fff" size={16}/>
        </div>
        <CardMedia component="img" image={image} alt={title} sx={{ height: 300 }} />
        <CardContent sx={{ display: "flex", flexDirection: "row", gap: 1.3, alignItems: "center" }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
            {title}
          </Typography>
          <Typography sx={{ color: "#4b5563", fontSize: "0.98rem", lineHeight: 1.5 }}>
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default OpenModalView;

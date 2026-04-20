import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { FaCircle } from "react-icons/fa6";

function OpenModalView({ title, excerpt, image, onOpen }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 3,
        border: "1px solid rgba(60, 67, 63, 0.18)",
        bgcolor: "rgba(255, 255, 255, 0.88)",
        boxShadow: "0 10px 24px rgba(39, 44, 42, 0.1)",
      }}
    >
      <CardActionArea onClick={onOpen} sx={{ height: "100%", alignItems: "stretch" }}>
        <CardMedia component="img" image={image} alt={title} sx={{ height: 300 }} />
        <CardContent sx={{ display: "flex", flexDirection: "row", gap: 1.3, alignItems: "center" }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
            {title}
          </Typography>
          <FaCircle size={5}/>
          <Typography sx={{ color: "#4b5563", fontSize: "0.98rem", lineHeight: 1.5 }}>
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default OpenModalView;

import { Typography } from "@mui/material";

function OpenModalView({ index, setOpen, title, excerpt, image }) {
  function openModal() {
    setOpen(index);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onClick={openModal}
    >
      <img src={image} style={{ width: 300, height: 300 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography>{excerpt}</Typography>
      </div>
    </div>
  );
}

export default OpenModalView;

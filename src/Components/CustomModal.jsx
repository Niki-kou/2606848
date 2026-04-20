import { Box, IconButton, Typography, Modal } from "@mui/material";
import { FaX } from "react-icons/fa6";

function CustomModal({ open, handleClose, children, title }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          width: 400,
          border: "2px solid #000",
          boxShadow: 24,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
              borderBottom: "1px solid black",
            }}
          >
            <Typography variant="h6" component="h2">
              {title}
            </Typography>
            <IconButton onClick={handleClose} size="small">
              <FaX />
            </IconButton>
          </div>
          <div style={{ padding: "16px" }}>{children}</div>
        </div>
      </Box>
    </Modal>
  );
}

export default CustomModal;

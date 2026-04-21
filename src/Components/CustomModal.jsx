import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import { FaX, FaCircleInfo } from "react-icons/fa6";

function CustomModal({ open, handleClose, children, title }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: 1,
          backgroundImage: "none",
          overflow: "hidden",
          width: "100%",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "#cccdcc",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(39, 44, 42, 0.16)",
        }}
      >
        <div style={{display: "flex", flexDirection: "row", gap: 15, alignItems: "center"}}>
          <FaCircleInfo size={26}/>
          <Typography
            component="h2"
            sx={{
              fontFamily: "Almendra SC",
              fontSize: { xs: "1.75rem", sm: "2.1rem" },
              lineHeight: 1,
            }}
          >
            {title}
          </Typography>
        </div>
        <IconButton onClick={handleClose} sx={{ color: "#2b312d" }}>
          <FaX size={14} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 3, overflowX: "hidden", bgcolor: "#cccdcc" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default CustomModal;

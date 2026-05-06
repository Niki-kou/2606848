import { Box, Divider, Typography } from "@mui/material";

export default function Section({ title, note: Note }) {
  return (
    <Box sx={{ py: 2 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: 1,
          fontFamily: "Almendra SC",
          fontSize: { xs: "2rem", sm: "2.5rem" },
          lineHeight: 1.1,
          color: "#2b312d",
        }}
      >
        {title}
      </Typography>

      <Divider sx={{ mb: 3, borderColor: "rgba(39, 44, 42, 0.2)" }} />

      <Box
        sx={{
          display: "flow-root",
          color: "#2b312d",
        }}
      >
        <Note />
      </Box>
    </Box>
  );
}

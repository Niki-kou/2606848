import { Box, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        pt: 3,
        borderTop: "1px solid rgba(39, 44, 42, 0.25)",
        color: "#3d4641",
      }}
    >
      <Stack spacing={1.5}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Almendra SC",
              lineHeight: 1,
              color: "#2b312d",
              textTransform: "uppercase",
            }}
          >
            Bibliography
          </Typography>
          <Typography sx={{ mt: 0.5, color: "#4b5563" }}>
            This is a super cool bibliography section / footer
          </Typography>
        </Box>

        <Box component="ol" sx={{ m: 0, pl: 3 }}>
          <Box component="li">
            <Typography component="span" sx={{ fontStyle: "italic" }}>
              Google search.&nbsp;
            </Typography>
            blah blah blah&nbsp;
            <Link
              href="https://website.com"
              target="_blank"
              rel="noreferrer"
              sx={{ color: "#1f3f5b", textUnderlineOffset: "0.15rem" }}
            >
              website.com
            </Link>
            .
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

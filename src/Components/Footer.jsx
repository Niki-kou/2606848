import { Box, Link, Stack, Typography } from "@mui/material";
import { FaBookOpen } from "react-icons/fa6";

function ReferenceItem({ searchText, description, href, linkText }) {
  return (
    <Box component="li">
      <Typography component="span" sx={{ fontStyle: "italic" }}>
        {searchText}&nbsp;
      </Typography>
      {description}&nbsp;
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        sx={{ color: "#1f3f5b", textUnderlineOffset: "0.15rem" }}
      >
        {linkText}
      </Link>
      .
    </Box>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        pt: 3,
        p: 2,
        bgcolor: "#cccdcc",
        boxShadow: "0 10px 24px rgba(39, 44, 42, 0.1)",
        color: "#3d4641",
        borderRadius: 1,
      }}
    >
      <Stack spacing={1.5}>
        <Box>
          <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "#191A19",
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 6,
                paddingBottom: 6,
                borderRadius: 100,
              }}
            >
              <FaBookOpen size={20} color="#cccdcc" style={{ transform: "translateY(1px)" }} />
            </div>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "2.0rem", sm: "2.5rem" },
                fontFamily: "Almendra SC",
                lineHeight: 1,
                color: "#2b312d",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Bibliography
            </Typography>
          </div>
          <Typography sx={{ mt: 0.5, color: "#4b5563", textAlign: "center" }}>
            This is a super cool bibliography section / footer
          </Typography>
        </Box>

        <Box
          component="ol"
          sx={{
            m: 0,
            pl: 0,
            pb: 2,
            width: "fit-content",
            mx: "auto",
            textAlign: "left",
            listStylePosition: "inside",
            alignSelf: "center",
          }}
        >
          <ReferenceItem
            searchText="Google search."
            description="blah blah blah"
            href="https://website.com"
            linkText="website.com"
          />

          <ReferenceItem
            searchText="Google search."
            description="more and more blah blah blah"
            href="https://otherwebsite.com"
            linkText="otherwebsite.com"
          />
        </Box>
      </Stack>
    </Box>
  );
}

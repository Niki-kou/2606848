import { Box, Link, Stack, Typography } from "@mui/material";

function ReferenceItem({ searchText, description, href, linkText }) {
  return (
    <Box component="li">
      <Typography
        component="span"
        sx={{
          fontStyle: "italic",
          fontSize: { xs: "0.6rem", sm: "0.8rem" },
        }}
      >
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
        mx: { xs: -2, md: -5 },
        mb: { xs: -3, md: -5 },
        mt: 2,
        px: { xs: 2, md: 5 },
        py: 3,
        bgcolor: "#cccdcc",
        color: "#3d4641",
      }}
    >
      <Stack spacing={1.5}>
        <Box>
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
        </Box>

        <Box
          component="ol"
          sx={{
            m: 0,
            pl: "1rem",
            pb: 2,
            width: "fit-content",
            mx: "auto",
            textAlign: "left",
            listStylePosition: "inside",
            alignSelf: "center",
            fontSize: { xs: "0.6rem", sm: "0.8rem" },
          }}
        >
          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Katherine Harrell"
            description="“The Fallen and Their Swords: A New Explanation for the Rise of the Shaft Graves.” American Journal of Archaeology, vol. 118, no. 1, 2014, pp. 3–17. JSTOR."
            href="https://doi.org/10.3764/aja.118.1.0003"
            linkText="https://doi.org/10.3764/aja.118.1.0003"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology: A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology: A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology: A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology: A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Mee, C."
            description="(2011) Greek Archaeology: A Thematic Approach, Oxford – Chap. 9"
          />

          <ReferenceItem
            searchText="Burton, D."
            description="(2003) ‘Public Memorials, Private Virtues: Women on Classical Athenian Grave Monuments’, Mortality 8.1, pp. 20–35"
          />

          <ReferenceItem
            searchText="Burton, D."
            description="(2003) ‘Public Memorials, Private Virtues: Women on Classical Athenian Grave Monuments’, Mortality 8.1, pp. 20–35"
          />

          <ReferenceItem
            searchText="Dimakis, Nikolas"
            description="“Ancient Greek Deathscapes.” Journal of Eastern Mediterranean Archaeology & Heritage Studies, vol. 3, no. 1, 2015, pp. 27–41. JSTOR"
            href="https://doi.org/10.5325/jeasmedarcherstu.3.1.0027"
            linkText="https://doi.org/10.5325/jeasmedarcherstu.3.1.0027"
          />

          <ReferenceItem
            searchText="Burton, D." 
            description="(2003) ‘Public Memorials, Private Virtues: Women on Classical Athenian Grave Monuments’, Mortality 8.1, pp. 20–35"
          />

          <ReferenceItem
            searchText="Dimakis, Nikolas"
            description="“Ancient Greek Deathscapes.” Journal of Eastern Mediterranean Archaeology & Heritage Studies, vol. 3, no. 1, 2015, pp. 27–41. JSTOR"
            href="https://doi.org/10.5325/jeasmedarcherstu.3.1.0027"
            linkText="https://doi.org/10.5325/jeasmedarcherstu.3.1.0027"
          />
        </Box>
      </Stack>
    </Box>
  );
}

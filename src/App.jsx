import { Box, Divider, Typography } from "@mui/material";

import Footer from "./Components/Footer";
import Section from "./Components/Section";

import SectionOne from "./Sections/sectionOne.mdx";
import SectionTwo from "./Sections/sectionTwo.mdx";
import SectionThree from "./Sections/sectionThree.mdx";
import SectionFour from "./Sections/sectionFour.mdx";
import SectionFive from "./Sections/sectionFive.mdx";

export default function App() {
  const sections = [
    { title: "Neolithic Era", note: SectionOne },
    { title: "Mycenaean Era", note: SectionTwo },
    { title: "Archaic Era", note: SectionThree },
    { title: "Classical Era", note: SectionFour },
    { title: "Concolusion", note: SectionFive },
  ];

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", px: { xs: 1, md: 2 }, py: { xs: 1, md: 3 } }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          minHeight: "100vh",
          px: { xs: 2, md: 5 },
          py: { xs: 3, md: 5 },
          display: "flex",
          flexDirection: "column",
          gap: 3,
          bgcolor: "#babbba",
          boxSizing: "border-box",
          boxShadow: "0 12px 32px rgba(39, 44, 42, 0.14)",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: "Almendra SC",
              textAlign: "center",
              fontSize: { xs: "2.5rem", sm: "3.75rem" },
              marginBottom: 3,
            }}
          >
            Timeline and analysis of buiral sites from Neolithic to classic Greece
          </Typography>

          <Typography
            component="p"
            sx={{
              textAlign: "center",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Funeral practises have been a major part of how we are able to analyse ancient
            societies as modern day historians, as the way the ancients treated death can tell us a
            lot about the state of their city-state and how their people lived, as "most of our
            evidence comes from cemeteries"<sup>1</sup> anyway and hat "Art is another useful
            source, and archaeologists have drawn on anthropology as a way to explore perceptions
            about death"<sup>2</sup>, therefore studying and interpreting burial grounds is a worthwhile
            pursuit.
          </Typography>
        </Box>


        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
          {sections.map(({ title, note }) => (
            <Section key={title} title={title} note={note} />
          ))}

          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

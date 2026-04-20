import { useState } from "react";
import { Box, Typography } from "@mui/material";

import CustomModal from "./Components/CustomModal";
import Footer from "./Components/Footer";
import OpenModalView from "./Components/OpenModalView";

import SectionOne from "./Sections/sectionOne.mdx";
import SectionTwo from "./Sections/sectionTwo.mdx";
import SectionThree from "./Sections/sectionThree.mdx";

import Image1 from "./assets/Mausoleum.jpg";

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        component="main"
        sx={{
          width: "80vw",
          minHeight: "100vh",
          px: { xs: 2, md: 3 },
          py: 2,
          display: "flex",
          flexDirection: "column",
          borderLeft: "2px solid #626c66",
          borderRight: "2px solid #626c66",
          bgcolor: "#babbba",
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: "Almendra SC",
            textAlign: "center",
            fontSize: { xs: "2.5rem", sm: "3.75rem" },
          }}
        >
          My awesome website
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            textAlign: "center",
            fontSize: { xs: "0.75rem", sm: "1rem" },
          }}
        >
          This is some paragraph
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(auto-fit, minmax(240px, 1fr))",
            },
            gap: 3,
            mt: 3,
          }}
        >
          <OpenModalView
            title="Mausoleum"
            excerpt="hello world"
            image={Image1}
            onOpen={() => setOpenIndex(0)}
          />
          <OpenModalView
            title="Mausoleum"
            excerpt="hello world"
            image={Image1}
            onOpen={() => setOpenIndex(1)}
          />
          <OpenModalView
            title="Mausoleum"
            excerpt="hello world"
            image={Image1}
            onOpen={() => setOpenIndex(2)}
          />
        </Box>

        <Footer />
      </Box>

      <CustomModal
        open={openIndex === 0}
        handleClose={() => setOpenIndex(null)}
        title="Mausoleum"
      >
        <SectionOne />
      </CustomModal>
      <CustomModal
        open={openIndex === 1}
        handleClose={() => setOpenIndex(null)}
        title="Mausoleum"
      >
        <SectionTwo />
      </CustomModal>
      <CustomModal
        open={openIndex === 2}
        handleClose={() => setOpenIndex(null)}
        title="Mausoleum"
      >
        <SectionThree />
      </CustomModal>
    </Box>
  );
}

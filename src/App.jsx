import { useState } from "react";

import CustomModal from "./Components/CustomModal";
import OpenModalView from "./Components/OpenModalView";

import SectionOne from "./Sections/sectionOne.mdx";
import SectionTwo from "./Sections/sectionTwo.mdx";
import SectionThree from "./Sections/sectionThree.mdx";

import Image1 from "./assets/Mausoleum.jpg";
import { Typography } from "@mui/material";

export default function App() {
  // -1 = closed, else index = which open
  const [open, setOpen] = useState(-1);

  function handleClose() {
    setOpen(-1);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80vw",
          height: "100vh",
          minWidth: "800px",
          borderLeft: "2px solid #626c66",
          borderRight: "2px solid #626c66",
          padding: 0,
          margin: 0,
          backgroundColor: "#babbba",
        }}
      >
        <Typography variant="h1" component="h1">
          My awesome webstie
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <OpenModalView
            index={1}
            setOpen={setOpen}
            image={Image1}
            title={"Mausoleum"}
            excerpt={"hello world"}
          />

          <OpenModalView
            index={1}
            setOpen={setOpen}
            image={Image1}
            title={"Mausoleum"}
            excerpt={"hello world"}
          />

          <OpenModalView
            index={1}
            setOpen={setOpen}
            image={Image1}
            title={"Mausoleum"}
            excerpt={"hello world"}
          />
        </div>
      </div>

      <CustomModal
        title={"Mausoleum"}
        open={open === 1}
        handleClose={handleClose}
        children={<SectionOne />}
      />
      <CustomModal
        title={"Title 2"}
        open={open === 2}
        handleClose={handleClose}
        children={<SectionTwo />}
      />
      <CustomModal
        title={"Title 3"}
        open={open === 3}
        handleClose={handleClose}
        children={<SectionThree />}
      />
    </div>
  );
}

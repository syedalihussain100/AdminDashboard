import React from "react";
import SidenavBar from "../components/SidenavBar";
import { Box } from "@mui/material";
import Navbbar from "../components/Navbar";

export default function Setting() {
  return (
    <>
      <Navbbar />
      <Box height={40}/>
      <Box sx={{ display: "flex" }}>
        <SidenavBar />
        <h1>Setting</h1>
      </Box>
    </>
  );
}

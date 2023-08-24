import React from "react";
import SidenavBar from "../components/SidenavBar";
import { Box } from "@mui/material";
import Navbbar from "../components/Navbar";
import ProductList from "./products/productLists";

export default function Event() {
  return (
    <>
      <Navbbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SidenavBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ProductList />
          </Box>
     
      </Box>
    </>
  );
}

import React from "react";
import SidenavBar from "../components/SidenavBar";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Navbbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import "./Dash.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ChartData } from "../chart/Chart";
// Accordian function here

export default function Home() {
  return (
    <>
      <Navbbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SidenavBar />
        <div style={{ background: "#efefef" }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradiant"
                  >
                    <CardContent>
                      <div>
                        <CreditCardIcon style={{ color: "#fff" }} />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#fff" }}
                      >
                        $500.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Events
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradiantlight"
                  >
                    <CardContent>
                      <div>
                        <ShoppingBagIcon style={{ color: "#fff" }} />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#fff" }}
                      >
                        $900.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Leagues
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              {/*  */}
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }} className="gradiantlight">
                    <CardContent>
                      <Stack spacing={2} direction="row">
                        <div>
                          <StorefrontIcon
                            className="iconstyle"
                            style={{ color: "#fff" }}
                          />
                        </div>
                        <div className="paddingall">
                          <span
                            className="pricetitle"
                            style={{ color: "#fff" }}
                          >
                            $2030k
                          </span>
                          <br />
                          <span
                            className="pricesubtitle"
                            style={{ color: "#ccd1d1" }}
                          >
                            Total Leagues
                          </span>
                        </div>
                      </Stack>
                    </CardContent>
                  </Card>
                  {/*  */}
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Stack spacing={2} direction="row">
                        <div>
                          <StorefrontIcon className="iconstyle" />
                        </div>
                        <div className="paddingall">
                          <span className="pricetitle">$2030k</span>
                          <br />
                          <span className="pricesubtitle">Total Leagues</span>
                        </div>
                      </Stack>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>

            {/* two */}
            <Box height={30} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <ChartData />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <Typography
                      style={{ marginBottom: "30px", padding: "0px 10px" }}
                    >
                      Leagues Details
                    </Typography>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Accordion 1</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>Accordion 2</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <Typography>Accordion 3</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    </>
  );
}

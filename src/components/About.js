import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import abtImg from "../images/about.jpg";
const About = () => {
  return (
    <div>
      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item lg={7} md={8} sm={12}>
          <Box pr={3} data-aos="zoom-in-right">
            <Typography fontSize={30} fontWeight="bold" color="primary.main" data-aos="fade-right">
              Best Care For Your Good Hairs
            </Typography>
            <Typography
              fontSize={20}
              textAlign="justify"
              pt={3}
              sx={{ lineHeight: 1.5 }}
            >
              A successful hair transplant procedure for women is similar to
              that of men, with a range of techniques available and selected
              based on the type of hair loss you may be affected by.
            </Typography>
            <Typography
              fontSize={20}
              textAlign="justify"
              pt={2}
              sx={{ lineHeight: 1.5 }}
            >
              An experienced and expert hair transplant surgeon, the male and
              female process differs slightly, requiring a high level of
              experience and skill to perfect.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={5} md={4} sm={12} data-aos="flip-right">
          <Box
            component="img"
            src={abtImg}
            width="100%"
            sx={{ borderRadius: 15 }}
          />
        </Grid>
      </Grid>

     
    </div>
  );
};

export default About;

import React from "react";
import cycle from "../images/h1.jpg";
import cycle1 from "../images/h2.png";
import { Box, Divider, Grid, Typography } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const Process = () => {
  return (
    <div>
      <Box py={3}>
        <Typography color={"#DD952B"} fontSize={26} padding={2}>
          How Can Help With Male Hair Transplantation
        </Typography>
        <Divider style={{ backgroundColor: "#DD952B" }} />
      </Box>

      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item lg={4} md={6} xs={10}>
          <Box
            component="img"
            src={cycle}
            width="100%"
            sx={{ borderRadius: 15 }}
          />  
        </Grid>
        <Grid item lg={7.5} md={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "normal",
              flexDirection: "row",
              pt: 2,
            }}
          >
            <ArrowCircleRightIcon sx={{ color: "#DD952B", pr: 1 }} />
            <h3>Hormonal Influences on Male Hair Loss</h3>
          </Box>
          <Typography
            fontSize={18}
            textAlign="justify"
            pt={2}
            sx={{ lineHeight: 1.5 }}
            pl={3.5}
          >
            Hair loss in men is frequently associated with hormonal factors.
            When hair roots do not receive adequate hormonal nutrition, they
            tend to shed, leading to progressive thinning and eventual baldness.
            This process typically begins at the front of the scalp and
            gradually moves towards the crown or may stay concentrated at the
            top. Recognizing these patterns helps in diagnosing the condition
            accurately.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "normal",
              flexDirection: "row",
              pt: 2,
            }}
          >
            <ArrowCircleRightIcon sx={{ color: "#DD952B", pr: 1 }} />
            <h3>Progression and Diagnosis of Male Pattern Baldness</h3>
          </Box>
          <Typography
            fontSize={18}
            textAlign="justify"
            pt={2}
            sx={{ lineHeight: 1.5 }}
            pl={3.5}

          >
            Understanding the hormonal influences on hair loss is crucial for
            effective diagnosis and treatment in men. The pattern of hair
            loss—starting from the frontal area and moving backward—provides
            important clues about the underlying causes. By identifying these
            hormonal triggers, specialists can tailor treatments that address
            the root cause of the problem, leading to better management and
            outcomes for male patients.
          </Typography>
        </Grid>
      </Grid>

      <Box py={3} sx={{ textAlign: "end" }}>
        <Typography color={"#DD952B"} fontSize={26} padding={2}>
          How Can Help With Female Hair Transplantation
        </Typography>
        <Divider style={{ backgroundColor: "#DD952B" }} />
      </Box>
      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item lg={7.5} md={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "normal",
              flexDirection: "row",
              pt: 2,
            }}
          >
            <ArrowCircleRightIcon sx={{ color: "#DD952B", pr: 1 }} />
            <h3>Hair Transplantation as a Solution for Women</h3>
          </Box>
          <Typography
            fontSize={16}
            textAlign="justify"
            pt={2}
            sx={{ lineHeight: 1.5 }}
            pl={3.5}
          >
            Hair transplantation is a viable solution for women experiencing
            thinning or loss of hair. This procedure can significantly improve
            hair density and provide a fuller, more natural look. Women seeking
            to address their hair loss can consider this option to restore their
            confidence and appearance.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "normal",
              flexDirection: "row",
              pt: 2,
            }}
          >
            <ArrowCircleRightIcon sx={{ color: "#DD952B", pr: 1 }} />

            <h3>Determining the Necessity of a Hair Transplant</h3>
          </Box>
          <Typography
            fontSize={16}
            textAlign="justify"
            pt={1}
            sx={{ lineHeight: 1.5 }}
            pl={3.5}
          >
            Before proceeding with a hair transplant, a thorough examination by
            a specialist is essential. This evaluation helps to determine if a
            hair transplant is necessary and appropriate for the individual. The
            specialist assesses the extent of hair loss, the condition of the
            scalp, and the overall health of the patient to make an informed
            decision about the best course of action.
          </Typography>
        </Grid>

        <Grid item lg={4} md={6} xs={10}>
          <Box
            component="img"
            src={cycle1}
            width="100%"
            sx={{ borderRadius: 15 }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Process;

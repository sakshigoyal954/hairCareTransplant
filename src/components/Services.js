import React from "react";
import eye from "../images/eye.png";
import body from "../images/body.png";
import { Box, Divider, Grid, Typography } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const Services = () => {
  return (
    <div>
      <div>
        <Box py={3}>
          <Typography color={"#DD952B"} fontSize={26} padding={2}>
            Eyebrow Hair Transplant & Microblading
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
              src={eye}
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
              <h3>Microblading</h3>
            </Box>
            <Typography
              fontSize={18}
              textAlign="justify"
              pt={2}
              sx={{ lineHeight: 1.5 }}
              pl={3.5}
            >
              The another method that can deliver semi-permanent result is
              Microblading. It is perfect for those who want to fully
              reconstruct, define, cover gap or fill in over plucked eyebrows or
              those who just want to add a slight area.
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
              <h3>Eyebrow Designing</h3>
            </Box>
            <Typography
              fontSize={18}
              textAlign="justify"
              pt={2}
              sx={{ lineHeight: 1.5 }}
              pl={3.5}
            >
              For natural-looking eyebrow surgery, consider gender, hair
              density, arch preference, and facial bone structure for optimal
              results.
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
              <h3>Eyebrow Restoration Technique</h3>
            </Box>
            <Typography
              fontSize={18}
              textAlign="justify"
              pt={2}
              sx={{ lineHeight: 1.5 }}
              pl={3.5}
            >
              It is very essential to provide natural looking eyebrows in both
              males and females. An outline of the eyebrows must always be drawn
              before hand and reviews of the patient must always be taken
              regarding the shape and design desired.
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div>
        <Box py={3} sx={{ textAlign: "end" }}>
          <Typography color={"#DD952B"} fontSize={26} padding={2}>
            Body Hair Transplant
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
              <h3>Beard Hair</h3>
            </Box>
            <Typography
              fontSize={16}
              textAlign="justify"
              pt={2}
              sx={{ lineHeight: 1.5 }}
              pl={3.5}
            >
              Beard hair is ideal for transplants due to its longevity and
              length, while chest hair lacks sufficient growth for a natural
              look.
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
              <h3>Last-Resort Body Hair Transplants</h3>
            </Box>
            <Typography
              fontSize={16}
              textAlign="justify"
              pt={2}
              sx={{ lineHeight: 1.5 }}
              pl={3.5}
            >
              Body hair is a last-resort transplant option. Hair Free and Hair
              Grow maximizes its potential for long-lasting, amazing results.
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

              <h3>Technique used for body hair transplant</h3>
            </Box>
            <Typography
              fontSize={16}
              textAlign="justify"
              pt={1}
              sx={{ lineHeight: 1.5 }}
              pl={3.5}
            >
              Follicular unit extraction (FUE) method is generally performed for
              body hair transplant which is carried out under local anasthesia
              With a complete knowledge and experience of different body hair
              body hair transplant can be performed to increase the density of
              scalp by covering the large areas.
            </Typography>
          </Grid>

          <Grid item lg={4} md={6} xs={10}>
            <Box
              component="img"
              src={body}
              width="100%"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Services;

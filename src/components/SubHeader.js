import React from "react";
import { Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import headImg from "../images/bnr1.png"; 

const SubHeader = () => {
  // Data object containing the text to display
  const data = {
    firsthead: "We offer the highest quality medical care, personalized treatment by leading experts."
  };

  return (
    <>
      {/* Container for the animated text */}
      <Box sx={{ py: 4 }}>
        <Box>
          <Typography
            sx={{
              fontSize: { lg: 55, md: 45, sm: 30 },
              fontWeight: 500,
              textAlign: "center"
            }}
          >
            {/* Animated text using TypeAnimation */}
            <TypeAnimation
              sequence={[data.firsthead, 3000]}
              speed={50}
              style={{ color: "#DD952B" }}
              repeat={Infinity}
            />
          </Typography>
        </Box>
      </Box>

      {/* Container for the image */}
      <Box sx={{ textAlign: "center", pb: 2 }}>
        <img src={headImg} alt="Header Image" style={{borderRadius:"50px"}} width="100%" />
      </Box>
    </>
  );
};

export default SubHeader;

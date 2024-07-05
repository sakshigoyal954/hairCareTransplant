import React, { useEffect } from "react";
import Layout from "../utills/Layout";
import { Box, Container } from "@mui/material";
import SubHeader from "../components/SubHeader";
import About from "../components/About";
import bnr2 from "../images/bnr2.jpg";
import Process from "../components/Process";
import Services from "../components/Services";
import Marque from "../components/Marque";
import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos';
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Adjust the animation duration as needed
     offset:200,
    });
  }, []);
  return (
    <Layout>
      <Box>
        <Marque />
      </Box>
      <Container
        sx={{
          maxWidth: { lg: "lg", xl: "xl", md: "md", sm: "sm", xs: "xs" },
        }}
      >
        <Box pt={2} pb={5}>
          <SubHeader />
        </Box>

        <Box pb={5}>
          <About />
        </Box>

        <Box pb={5}>
          <Process />
        </Box>

        <Box pb={5}>
          <Services />
        </Box>
      </Container>

      <Box pb={3}>
        <Marque />
      </Box>

      <Container
        sx={{
          maxWidth: { lg: "lg", xl: "xl", md: "md", sm: "sm", xs: "xs" },
        }}
      >
        <Box sx={{ textAlign: "center", pb: 2 }}  data-aos="zoom-out">
          <img
            src={bnr2}
            alt="bottam Image"
            style={{ borderRadius: "50px" }}
            width="100%"
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;

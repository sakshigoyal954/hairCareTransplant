import { Typography } from '@mui/material';
import React from 'react'
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div>
        <Marquee style={{alignItems:"center"}}>
          <Typography
            fontSize={30}
            textAlign="justify"
            mt={2}
            py={2}
            px={1}
            color="white"
            sx={{backgroundColor:"#DD952B"}}
            
          >
          "Root Estentic Clinic Hair Transplant" Contact us On  Mobile- <b>7060454550</b>  Email - <b>info@rootestheticclinic.com , rootestheticclinic@gmail.com</b>  
          </Typography>
        </Marquee>
      </div>
  )
}

export default Marque
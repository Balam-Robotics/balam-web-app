import { Box, Image } from "@chakra-ui/react";
import React from "react";
import BalamGear from "../../assets/img/Home/BalamGear.svg";
import BalamShield from "../../assets/img/Home/BalamShield.svg";
import "./BalamLogo.css";

export default function BalamLogo() {
  return (
    <Box className="container">
      <Box className="container-shield">
        <Image src={BalamShield} />
      </Box>
      <Box className="container-gear">
        <Image src={BalamGear} />
      </Box>
    </Box>
  );
}

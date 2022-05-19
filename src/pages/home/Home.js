import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BalamLogo from "./BalamLogo";
import "./Home.css";

export default function Home() {
  return (
    <Box className="grid-container">
      <Box className="header">
        <Box>
          <Heading className="header-heading">Balam 3257</Heading>
        </Box>
        <Box>
          <Text className="header-subtitle">
            Equipo mexicano de robótica de PrepaTec Esmeralda.
          </Text>
        </Box>
        <Box className="balam-logo-image-container">
          <BalamLogo />
        </Box>
      </Box>
      <Box className="gallery"></Box>
      <Box className="about-us"></Box>
      <Box className="sponsors"></Box>
    </Box>
  );
}

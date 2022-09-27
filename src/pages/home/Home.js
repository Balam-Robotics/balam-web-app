import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BalamLogo from "./BalamLogo";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Box className="grid-container">
        <Box className="header">
          <Box>
            <Text className="header-heading">Balam 3257</Text>
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
      </Box>
      <Box>
        <Text className="aboutus-text">
          Balam 3527 es un equipo de robótica del Tec de Monterrey conformado
          por jóvenes que buscan educarse en áreas de STEM.
        </Text>
      </Box>
    </>
  );
}

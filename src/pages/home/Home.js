import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BalamLogo from "./BalamLogo";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Box className="header-container">
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
      <Box className="grid-container">
        <Box className="main-body">
          <Text className="question-subtitle">Quienes somos?</Text>
        </Box>
      </Box>
    </>
  );
}

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./Raffle.css";

export default function Header() {
  return (
    <Box className="header-container">
      <Box className="first-grid-container">
        <Box className="first-grid-box-title">
          <Text className="text-header-title">¡Rifa Balam 2022!</Text>
          <Text className="text-header-subtitle">
            Prueba tu suerte y gana los últimos premios en tecnología.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

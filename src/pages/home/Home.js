import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BalamLogo from "./BalamLogo";
import Movie from "../../assets/img/Home/movie.mp4";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Box className="header-container">
        <Box className="header">
          <video
            src={Movie}
            autoPlay
            loop
            muted
            defaultMuted
            className="video-bg"
          ></video>
          <Box className="bg-overlay"></Box>
          <Box className="space-band" />
          <Box className="upper-index">
            <Text className="header-heading">Balam 3257</Text>
          </Box>
          <Box className="upper-index">
            <Text className="header-subtitle">
              Equipo mexicano de robótica de PrepaTec Esmeralda.
            </Text>
          </Box>
          <Box className="balam-logo-image-container">
            <BalamLogo />
          </Box>
        </Box>
      </Box>
      {/* <Box className="grid-container">
        <Box className="main-body">
          <Text className="question-subtitle">Quienes somos?</Text>
        </Box>
      </Box> */}
    </>
  );
}

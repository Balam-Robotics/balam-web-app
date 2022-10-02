import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BalamLogo from "./BalamLogo";
import Movie from "../../assets/img/Home/movie.mp4";
import "./Home.css";
import { BrowserView, MobileView } from "react-device-detect";
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Box className="header-container">
        <BrowserView>
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
        </BrowserView>

        <Box className="header">
          <NavLink to={"/raffle"}>
            <BrowserView>
              <Button
                icon={<BsInstagram />}
                colorScheme="purple"
                variant="solid"
                size="lg"
                marginBottom="50px"
              >
                🏆 ¡Rifa Balam 2022! 🏆
              </Button>
            </BrowserView>
            <MobileView>
              <Button
                icon={<BsInstagram />}
                colorScheme="purple"
                variant="solid"
                size="lg"
                marginTop="20px"
                marginBottom="30px"
              >
                🏆 ¡Rifa Balam 2022! 🏆
              </Button>
            </MobileView>
          </NavLink>
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

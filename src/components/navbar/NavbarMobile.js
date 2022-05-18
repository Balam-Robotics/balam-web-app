import { Box, Button, IconButton, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/placeholders/Balam_logo.png";
import React from "react";
import { VscThreeBars } from "react-icons/vsc";

export default function NavbarMobile() {
  return (
    <div>
      <Box
        bg="#1A202C"
        width="100%"
        height={100}
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box display="flex" alignContent="flex-start">
          <NavLink to={"/"}>
            <Image src={Logo} boxSize="70px" objectFit="contain" />
          </NavLink>
        </Box>

        <Box display="flex" justifyContent="space-evenly">
          <IconButton
            icon={<VscThreeBars />}
            variant="ghost"
            textColor="white"
            size="lg"
            fontSize="40px"
          />
        </Box>
      </Box>
    </div>
  );
}

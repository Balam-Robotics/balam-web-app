import React from "react";
import { Box, IconButton, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavbarLogoGear from "../../assets/img/Navbar/NavbarGear.svg";
import NavbarLogoBalam from "../../assets/img/Navbar/NavbarBalam.svg";
import ITESMLogo from "../../assets/img/Navbar/ITESM.svg";
import { VscThreeBars } from "react-icons/vsc";

export default function NavbarMobile() {
  return (
    <div>
      <Box
        bg="#242526"
        width="100%"
        height="70px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link to={"/"}>
          <Box
            display="flex"
            alignItems="center"
            width="200px"
            marginLeft="15px"
            marginRight="40px"
          >
            <Box width="95%" marginLeft="10px">
              <Image src={ITESMLogo} />
            </Box>
            <Box width="100%" marginLeft="15px">
              <Image src={NavbarLogoGear} className="LogoGear" />
            </Box>
            <Box width="500px" marginLeft="7px">
              <Image src={NavbarLogoBalam} />
            </Box>
          </Box>
        </Link>
        <Box marginRight="15px">
          <IconButton
            icon={<VscThreeBars />}
            variant="ghost"
            fontSize="45px"
            textColor="white"
          />
        </Box>
      </Box>
    </div>
  );
}

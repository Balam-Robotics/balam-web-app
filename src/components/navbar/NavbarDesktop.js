import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
  IconButton,
  Image,
  LightMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Tooltip,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarLogoGear from "../../assets/img/Navbar/NavbarGear.svg";
import NavbarLogoBalam from "../../assets/img/Navbar/NavbarBalam.svg";
import ITESMLogo from "../../assets/img/Navbar/ITESM.svg";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { VscChevronDown } from "react-icons/vsc";
import { IoSettingsSharp } from "react-icons/io5";
import "./Navbar.css";

export default function NavbarDesktopNew() {
  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }

  return (
    <Flex
      bg="#242526"
      width="100%"
      height="70px"
      justifyContent="space-between"
    >
      <HStack spacing="30px" marginLeft="15px">
        <HStack spacing="15px">
          <Link to={"/"}>
            <Box width="55px">
              <Image src={ITESMLogo} pointerEvents="none" userSelect={"none"} />
            </Box>
          </Link>
          <Link to={"/"}>
            <HStack spacing="8px">
              <Box width="max-content" className="box-logo-balam">
                <IoSettingsSharp fontSize="60px" />
              </Box>
              <Box width="150px">
                <Image
                  src={NavbarLogoBalam}
                  pointerEvents="none"
                  userSelect={"none"}
                />
              </Box>
            </HStack>
          </Link>
        </HStack>
        <HStack>
          <NavLink
            to={"/history"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Historia
          </NavLink>
          <NavLink
            to={"/events"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Eventos
          </NavLink>
          {/* <NavLink
            to={"/donations"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Donaciones
          </NavLink> */}
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            ¡Contáctanos!
          </NavLink>
          <NavLink to={"/raffle"}>
            <Button
              icon={<BsInstagram />}
              colorScheme="teal"
              variant="outline"
              size="sm"
            >
              ¡Rifa Balam 2022!
            </Button>
          </NavLink>
        </HStack>
      </HStack>
      <HStack spacing="10px" marginRight="15px">
        <LightMode>
          <IconButton
            icon={<BsInstagram />}
            colorScheme="pink"
            fontSize="25px"
            onClick={() =>
              openInNewTab("https://www.instagram.com/balam_3527/")
            }
          />
          <IconButton
            icon={<BsFacebook />}
            colorScheme="facebook"
            fontSize="25px"
            onClick={() =>
              openInNewTab("https://www.facebook.com/tecbalam3527")
            }
          />
        </LightMode>
      </HStack>
    </Flex>
  );
}

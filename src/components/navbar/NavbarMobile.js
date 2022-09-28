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
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarLogoGear from "../../assets/img/Navbar/NavbarGear.svg";
import NavbarLogoBalam from "../../assets/img/Navbar/NavbarBalam.svg";
import ITESMLogo from "../../assets/img/Navbar/ITESM.svg";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { VscChevronDown } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { IoSettingsSharp } from "react-icons/io5";
import "./Navbar.css";

export default function NavbarMobile() {
  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        bg="#242526"
        width="100%"
        height="70px"
        justifyContent="space-between"
      >
        <HStack spacing="30px" marginLeft="15px">
          <HStack spacing="15px">
            <Link to={"/"}>
              <Box width="35px">
                <Image
                  src={ITESMLogo}
                  pointerEvents="none"
                  userSelect={"none"}
                />
              </Box>
            </Link>
            <Link to={"/"}>
              <HStack spacing="8px">
                <Box width="max-content" className="box-logo-balam">
                  <IoSettingsSharp fontSize="42px" />
                </Box>
                <Box width="120px">
                  <Image
                    src={NavbarLogoBalam}
                    pointerEvents="none"
                    userSelect={"none"}
                  />
                </Box>
              </HStack>
            </Link>
          </HStack>
        </HStack>
        <HStack marginRight="15px">
          <IconButton
            icon={<VscMenu />}
            onClick={onOpen}
            fontSize="35px"
            size="lg"
            variant="ghost"
          />
        </HStack>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex justifyContent="space-between" bg="#242526">
            <HStack>
              <Box>
                <DrawerHeader>¿A dónde iras?</DrawerHeader>
              </Box>
            </HStack>
            <HStack marginRight="15px">
              <IconButton
                icon={<VscClose />}
                onClick={onClose}
                fontSize="35px"
                size="lg"
                variant="ghost"
              />
            </HStack>
          </Flex>
          <DrawerBody>
            <VStack gap="30px">
              <VStack gap="15px">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={onClose}
                >
                  Inicio
                </NavLink>
                <NavLink
                  to={"/history"}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={onClose}
                >
                  Historia
                </NavLink>
                <NavLink
                  to={"/events"}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={onClose}
                >
                  Eventos
                </NavLink>
                <NavLink
                  to={"/donations"}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={onClose}
                >
                  Donaciones
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  onClick={onClose}
                >
                  ¡Contáctanos!
                </NavLink>
                <NavLink to={"/raffle"}>
                  <Button
                    icon={<BsInstagram />}
                    colorScheme="teal"
                    variant="outline"
                    size="sm"
                    onClick={onClose}
                  >
                    ¡Rifa Balam 2022!
                  </Button>
                </NavLink>
              </VStack>
              <VStack>
                <HStack>
                  <LightMode>
                    <IconButton
                      icon={<BsInstagram />}
                      colorScheme="pink"
                      fontSize="30px"
                      size="lg"
                      onClick={() =>
                        openInNewTab("https://www.instagram.com/balam_3527/")
                      }
                    />
                    <IconButton
                      icon={<BsFacebook />}
                      colorScheme="facebook"
                      fontSize="30px"
                      size="lg"
                      onClick={() =>
                        openInNewTab("https://www.facebook.com/tecbalam3527")
                      }
                    />
                  </LightMode>
                </HStack>
                <Text>¡síguenos!</Text>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

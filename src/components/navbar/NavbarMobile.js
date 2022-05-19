import React from "react";
import {
  Box,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import NavbarLogoGear from "../../assets/img/Navbar/NavbarGear.svg";
import NavbarLogoBalam from "../../assets/img/Navbar/NavbarBalam.svg";
import ITESMLogo from "../../assets/img/Navbar/ITESM.svg";
import { VscMenu, VscClose } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function NavbarMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function openInNewTab(url) {
    window.open(url, "_blank").focus();
  }

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
            marginLeft="10px"
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
        <Box marginRight="25px">
          <IconButton
            icon={<VscMenu />}
            variant="ghost"
            fontSize="45px"
            textColor="white"
            onClick={onOpen}
          />
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#242526">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text textColor="white">¿A dónde iras?</Text>
              <Box>
                <IconButton
                  icon={<VscClose />}
                  variant="ghost"
                  fontSize="45px"
                  textColor="white"
                  onClick={onClose}
                />
              </Box>
            </Box>
          </ModalHeader>
          <ModalBody>
            <Box display="flex" flexDirection="column" alignItems="center">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "activeMobile" : "inactiveMobile"
                }
                onClick={onClose}
              >
                Inicio
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "activeMobile" : "inactiveMobile"
                }
                onClick={onClose}
              >
                Sobre nosotros
              </NavLink>
              <NavLink
                to={"/history"}
                className={({ isActive }) =>
                  isActive ? "activeMobile" : "inactiveMobile"
                }
                onClick={onClose}
              >
                Historia
              </NavLink>
              <NavLink
                to={"/events"}
                className={({ isActive }) =>
                  isActive ? "activeMobile" : "inactiveMobile"
                }
                onClick={onClose}
              >
                Eventos
              </NavLink>
              <NavLink
                to={"/team"}
                className={({ isActive }) =>
                  isActive ? "activeMobile" : "inactiveMobile"
                }
                onClick={onClose}
              >
                Equipo
              </NavLink>
              <NavLink
                to={"/donations"}
                className={({ isActive }) =>
                  isActive ? "activeMobile" : "inactiveMobile"
                }
                onClick={onClose}
              >
                Donaciones
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "activeMobile" : "inactiveMobile"
                }
                onClick={onClose}
              >
                ¡Contáctanos!
              </NavLink>
            </Box>
            <Box
              display="flex"
              paddingTop="40px"
              flexDirection="column"
              alignItems="center"
            >
              <Text paddingBottom="10px" fontSize="16px">
                ¡Síguenos!
              </Text>
              <Box display="flex" flexDirection="row">
                <Box paddingRight="5px" paddingLeft="5px">
                  <Tooltip label="Échale un vistazo a nuestro Instagram 😏">
                    <IconButton
                      icon={<BsInstagram />}
                      fontSize="22px"
                      colorScheme="pink"
                      onClick={() =>
                        openInNewTab("https://www.instagram.com/balam_3527/")
                      }
                    />
                  </Tooltip>
                </Box>
                <Box paddingRight="5px" paddingLeft="5px">
                  <Tooltip label="Échale un vistazo a nuestro Facebook 🛐">
                    <IconButton
                      icon={<BsFacebook />}
                      fontSize="22px"
                      colorScheme="facebook"
                      onClick={() =>
                        openInNewTab("https://www.facebook.com/tecbalam3527")
                      }
                    />
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

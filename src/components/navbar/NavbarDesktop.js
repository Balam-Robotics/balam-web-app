import { Box, IconButton, Image, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarLogoGear from "../../assets/img/Navbar/NavbarGear.svg";
import NavbarLogoBalam from "../../assets/img/Navbar/NavbarBalam.svg";
import ITESMLogo from "../../assets/img/Navbar/ITESM.svg";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "./Navbar.css";

export default function NavbarDesktop() {
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
        <Box display="flex" flexDirection="row" alignItems="center">
          <Link to={"/"}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              width="240px"
              marginRight="30px"
            >
              <Box width="90%" marginLeft="10px">
                <Image src={ITESMLogo} />
              </Box>
              <Box width="100%" marginLeft="20px">
                <Image src={NavbarLogoGear} className="LogoGear" />
              </Box>
              <Box width="500px" marginLeft="10px">
                <Image src={NavbarLogoBalam} />
              </Box>
            </Box>
          </Link>
          <Box className="navGroup">
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Sobre nosotros
            </NavLink>
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
            <NavLink
              to={"/team"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Equipo
            </NavLink>
            <NavLink
              to={"/donations"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Donaciones
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              ¡Contáctanos!
            </NavLink>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-start">
          <Box paddingRight="10px">
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
          <Box paddingRight="10px">
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
    </div>
  );
}

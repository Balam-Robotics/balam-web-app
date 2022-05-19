import {
  Box,
  Button,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarLogoGear from "../../assets/img/Navbar/NavbarGear.svg";
import NavbarLogoBalam from "../../assets/img/Navbar/NavbarBalam.svg";
import ITESMLogo from "../../assets/img/Navbar/ITESM.svg";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "./Navbar.css";

export default function NavbarDesktop() {
  return (
    <div>
      <Box
        bg="#242526"
        width="100%"
        height="70px"
        display="flex"
        alignItems="center"
      >
        <Link to={"/"}>
          <Box
            display="flex"
            alignItems="center"
            width="250px"
            marginLeft="15px"
            marginRight="40px"
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
    </div>
  );
}

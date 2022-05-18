import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/placeholders/Balam_logo.png";
import "./Navbar.css";

export default function NavbarDesktop() {
  return (
    <div>
      <Box
        bg="#12161C"
        width="100%"
        height={100}
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box display="flex" alignContent="space-evenly">
          <NavLink to={"/"}>
            <Image src={Logo} boxSize="79" objectFit="contain" />
          </NavLink>
        </Box>

        <Box className="navGroup">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Inicio
          </NavLink>
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

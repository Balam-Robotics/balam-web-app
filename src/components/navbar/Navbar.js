import {
  Box,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  IconButton,
  Flex,
  HStack,
  Button,
  LightMode,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { VscClose } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

export default function Navbar() {
  // eslint-disable-next-line
  const [height, width] = useWindowSize();

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Box>
        {isVisible ? (
          <Alert status="success" variant="solid" icon>
            <Flex
              alignItems="center"
              width="100%"
              justifyContent="space-between"
            >
              <HStack>
                ``
                <AlertDescription>
                  <Text>
                    ¡Participa y prueba tu suerte en la rifa Balam 2022! 🤞
                    Hazte de lo último en tecnología y ganate in iPad Air, unos
                    Airpods, una cámara y más. ‎
                    <NavLink to={"/raffle"} onClick={onClose}>
                      <LightMode>
                        <Button colorScheme="blue" variant="link" size="sm">
                          Ver más
                        </Button>
                      </LightMode>
                    </NavLink>
                  </Text>
                </AlertDescription>
              </HStack>
              <HStack>
                <IconButton
                  icon={<VscClose />}
                  onClick={onClose}
                  fontSize="35px"
                  size="lg"
                  variant="ghost"
                  color="black"
                />
              </HStack>
            </Flex>
          </Alert>
        ) : (
          <></>
        )}
      </Box>

      {width < 1110 ? <NavbarMobile /> : <NavbarDesktop />}
    </>
  );
}

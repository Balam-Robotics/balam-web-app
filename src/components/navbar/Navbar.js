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
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { VscClose } from "react-icons/vsc";

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
          <Alert status="warning" variant="solid">
            <Flex
              alignItems="center"
              width="100%"
              justifyContent="space-between"
            >
              <HStack>
                <AlertIcon />
                <AlertTitle>¡Atención!</AlertTitle>
                <AlertDescription>
                  Esta es una versión preliminar de la aplicación que solo está
                  prevista para pruebas.
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

      {width < 920 ? <NavbarMobile /> : <NavbarDesktop />}
    </>
  );
}

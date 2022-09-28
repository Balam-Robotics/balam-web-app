import {
  Box,
  Image,
  Text,
  VStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
  Button,
  HStack,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";
import { IoRefresh, IoSearchOutline } from "react-icons/io5";
import iPadAir from "../../../src/assets/img/Raffle/iPadAir.png";
import AirPods from "../../../src/assets/img/Raffle/AirPods3.png";
import Bose from "../../../src/assets/img/Raffle/Bose.png";
import Echo from "../../../src/assets/img/Raffle/Echo.png";
import Placeholder from "../../../src/assets/img/Raffle/placeholder.png";
import "./Raffle.css";

export default function Raffle() {
  return (
    <>
      <Box className="header-container">
        <Box className="first-grid-container">
          <Box className="first-grid-box-title">
            <Text className="text-header-title">¡Rifa Balam 2022!</Text>
            <Text className="text-header-subtitle">
              Prueba tu suerte y gana los últimos premios en tecnología.
            </Text>
          </Box>
        </Box>
      </Box>
      <Tabs variant={"line"} align={"center"}>
        <TabList>
          <Tab>Inicio</Tab>
          <Tab>Tabla</Tab>
          <Tab>Consulta tu boleto</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text className="text-header-title2">
              ¡Ve todo lo que podrías ganarte! 👀
            </Text>
            <Box className="second-grid-container">
              <Box className="box-prizes-card">
                <VStack>
                  <Image src={iPadAir} className="img-prize" />
                  <Text className="text-prize-title">iPad Air de 64 GB</Text>
                  <Text className="text-prize-subtitle">
                    (Quinta generación, WiFi)
                  </Text>
                </VStack>
              </Box>
              <Box className="box-prizes-card">
                <VStack>
                  <Image src={AirPods} className="img-prize" />
                  <Text className="text-prize-title">AirPods</Text>
                  <Text className="text-prize-subtitle">
                    (Tercera generación)
                  </Text>
                </VStack>
              </Box>
              <Box className="box-prizes-card">
                <VStack>
                  <Image src={Placeholder} className="img-prize" />
                  <Text className="text-prize-title">Cámara polaroid</Text>
                  <Text className="text-prize-subtitle">
                    (Falta infromación del modelo)
                  </Text>
                </VStack>
              </Box>
              <Box className="box-prizes-card">
                <VStack>
                  <Image src={Bose} className="img-prize" />
                  <Text className="text-prize-title">Bose soundlink micro</Text>
                  <Text className="text-prize-subtitle">
                    (Altavoz Bluetooth)
                  </Text>
                </VStack>
              </Box>
              <Box className="box-prizes-card">
                <VStack>
                  <Image src={Echo} className="img-prize" />
                  <Text className="text-prize-title">Echo dot</Text>
                  <Text className="text-prize-subtitle">
                    (Falta infromación del modelo)
                  </Text>
                </VStack>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box className="box-raffle-table">
              <VStack>
                <FormControl marginBottom={15}>
                  <FormLabel>Celda</FormLabel>
                  <Input placeholder="Por ejemplo: AB16" size={"lg"} />
                  <FormHelperText>
                    No utiices espacios, no distingue entre mayúsculas y
                    minúsculas
                  </FormHelperText>
                </FormControl>
                <Button
                  rightIcon={<IoRefresh />}
                  colorScheme="teal"
                  variant="outline"
                >
                  Recargar tabla
                </Button>
              </VStack>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box className="box-ticket-check">
              <VStack>
                <Text className="text-header-subtitle2">
                  Si quieres verificar la información de tu boleto(s) que
                  compraste, escribe tu matrícula para brindarte los datos. En
                  caso de que hayas comprado un boleto y no se vea, por favor,
                  acércate a nosotros.{" "}
                </Text>
                <Input placeholder="A00000000" size={"lg"} />
                <Button
                  rightIcon={<IoSearchOutline />}
                  colorScheme="teal"
                  variant="outline"
                >
                  Consultar
                </Button>
              </VStack>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

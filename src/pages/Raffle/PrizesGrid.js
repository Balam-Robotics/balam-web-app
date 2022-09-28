import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import iPadAir from "../../../src/assets/img/Raffle/iPadAir.png";
import AirPods from "../../../src/assets/img/Raffle/AirPods3.png";
import Bose from "../../../src/assets/img/Raffle/Bose.png";
import Echo from "../../../src/assets/img/Raffle/Echo.png";
import Placeholder from "../../../src/assets/img/Raffle/placeholder.png";
import "./Raffle.css";

export default function PrizesGrid() {
  return (
    <>
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
            <Text className="text-prize-subtitle">(Tercera generación)</Text>
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
            <Text className="text-prize-subtitle">(Altavoz Bluetooth)</Text>
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
    </>
  );
}

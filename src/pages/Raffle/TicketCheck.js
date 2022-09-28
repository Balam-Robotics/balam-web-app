import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import React from "react";
import "./Raffle.css";

export default function TicketCheck() {
  return (
    <Box className="box-ticket-check">
      <VStack>
        <Text className="text-header-subtitle2">
          Si quieres verificar la información de tu boleto(s) que compraste,
          escribe tu matrícula para brindarte los datos. En caso de que hayas
          comprado un boleto y no se vea, por favor, acércate a nosotros.{" "}
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
  );
}

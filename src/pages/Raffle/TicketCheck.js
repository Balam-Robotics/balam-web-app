import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import React, { useState } from "react";
import dummyJSON from "./DummyUsers.json";
import "./Raffle.css";

export default function TicketCheck() {
  const [fetchedData, setFetechedData] = useState();
  const [loading, setLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);

  //Input and button controls
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  const [ticketData, setTicketData] = useState();
  const [invalidId, setInvalidId] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setErrorOccured(false);

    fetch()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setFetechedData(data);
      })
      .catch((error) => {
        setErrorOccured(true);
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <Box className="box-ticket-check">
      <VStack>
        <Text className="text-header-subtitle2" width="300px">
          Si quieres verificar la información del boleto que compraste, escribe
          el ID de compra para brindarte los datos. En caso de que hayas
          comprado un boleto y no se vea, por favor, acércate a nosotros para
          poder ayudarte.
        </Text>
        <Input
          placeholder="ID de compra"
          size={"lg"}
          width="300px"
          value={value}
          onChange={handleChange}
        />
        <Text>{value}</Text>
        <Button
          rightIcon={<IoSearchOutline />}
          colorScheme="teal"
          variant="outline"
          isLoading={loading}
          loadingText="Obteniendo registro"
        >
          Consultar
        </Button>
      </VStack>

      {ticketData == undefined ? (
        <></>
      ) : (
        <VStack marginBottom="100px">
          <VStack
            marginTop="80px"
            border="2px dashed #ccc"
            borderRadius="5px"
            width="clamp(300px, 60vw, 600px);"
          >
            <Text
              className="text-header-title2"
              marginRight="5px"
              marginLeft="5px"
            >
              Información de tu compra
            </Text>
          </VStack>
          <VStack>
            <HStack>
              <Text fontFamily="Co Text" fontWeight="800">
                ID:
              </Text>
              <Text>{ticketData[0].id}</Text>
            </HStack>
            <HStack>
              <Text fontFamily="Co Text" fontWeight="800">
                Nombre:
              </Text>
              <Text>{ticketData[0].nombre}</Text>
            </HStack>
            <HStack>
              <Text fontFamily="Co Text" fontWeight="800">
                Fecha de la compra:
              </Text>
              <Text>{ticketData[0].fecha}</Text>
            </HStack>
            <HStack>
              <Text fontFamily="Co Text" fontWeight="800">
                Cantidad pagada:
              </Text>
              <Text>{ticketData[0].pagado}</Text>
            </HStack>
            <HStack>
              <Text fontFamily="Co Text" fontWeight="800">
                Matrícula:
              </Text>
              <Text>{ticketData[0].matricula}</Text>
            </HStack>
            <HStack>
              <Text fontFamily="Co Text" fontWeight="800">
                Celda elegida:
              </Text>
              <Text>{ticketData[0].celda}</Text>
            </HStack>
            <HStack>
              <Text fontFamily="Co Text" fontWeight="800">
                Vendedor:
              </Text>
              <Text>{ticketData[0].vendedor}</Text>
            </HStack>
          </VStack>
        </VStack>
      )}
    </Box>
  );
}

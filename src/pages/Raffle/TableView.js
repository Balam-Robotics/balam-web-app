import {
  Box,
  Button,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Table,
  Text,
  VStack,
  HStack,
  Badge,
  useToast,
} from "@chakra-ui/react";
import "react-data-grid/lib/styles.css";
import { IoRefresh } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import "./Raffle.css";
import TableElementBought from "./TableElementBought";
import TableElementAvaliable from "./TableElementAvaliable";
import dummyJSON from "./DummyData.json";

export default function TableView() {
  const url =
    "https://sheet.best/api/sheets/29c1b8ce-eb02-4ed5-9c18-0eaf19a5dbc3";
  const url2 = "https://jsonplaceholder.typicode.com/todos";
  const url3 =
    "https://api.steinhq.com/v1/storages/6338ff24eced9b09e99d8202/table";

  const [fetchedData, setFetechedData] = useState(dummyJSON);
  const [loading, setLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);

  const toast = useToast();

  const showToast = () => {
    toast({
      title: "¡Datos actualizados!",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const fetchData = () => {
    setLoading(true);
    setErrorOccured(false);

    fetch(url3)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setFetechedData(data);
        showToast();
      })
      .catch((error) => {
        setErrorOccured(true);
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <>
      <VStack className="box-raffle-table-header">
        <Text className="text-header-subtitle2">
          Para consultar el estado de la tabla de la rifa con los datos más
          recientes, presiona el botón de abajo.
        </Text>
        <Button
          rightIcon={<IoRefresh />}
          colorScheme="teal"
          variant="outline"
          loadingText="Obteniendo datos"
          onClick={() => {
            fetchData();
          }}
          isLoading={loading}
        >
          Recargar tabla
        </Button>
        {!errorOccured ? (
          <></>
        ) : (
          <Badge colorScheme="red">
            <VStack>
              <Text>Ocurrió un error, intenta más tarde.</Text>
            </VStack>
          </Badge>
        )}
        <HStack className="table-legend" spacing={8}>
          <VStack>
            <TableElementAvaliable />
            <Text>Boletos disponibles:</Text>
          </VStack>
          <VStack>
            <TableElementBought />
            <Text>Boletos vendidos:</Text>
          </VStack>
        </HStack>
      </VStack>
      {/* TABLA */}
      <Box className="table-box">
        <TableContainer>
          <Table variant="striped" size="sm">
            <Thead>
              <Tr>
                <Th>-</Th>
                <Th>A</Th>
                <Th>B</Th>
                <Th>C</Th>
                <Th>D</Th>
                <Th>E</Th>
                <Th>F</Th>
                <Th>G</Th>
                <Th>H</Th>
                <Th>I</Th>
                <Th>J</Th>
                <Th>K</Th>
                <Th>L</Th>
                <Th>M</Th>
                <Th>N</Th>
                <Th>O</Th>
                <Th>P</Th>
                <Th>Q</Th>
                <Th>R</Th>
                <Th>S</Th>
                <Th>T</Th>
                <Th>U</Th>
                <Th>V</Th>
                <Th>W</Th>
                <Th>X</Th>
                <Th>Y</Th>
              </Tr>
            </Thead>
            <Tbody>
              {fetchedData.map((item, i) => (
                <Tr key={i}>
                  <Td>
                    <Text>{item.Ñ}</Text>
                  </Td>
                  <Td>
                    {item.A === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.B === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.C === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.D === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.E === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.F === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.G === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.H === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.I === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.J === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.K === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.L === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.M === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.N === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.O === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.P === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.Q === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.R === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.S === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.T === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.U === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.V === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.W === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.X === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                  <Td>
                    {item.Y === "Z" ? (
                      <TableElementAvaliable />
                    ) : (
                      <TableElementBought />
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

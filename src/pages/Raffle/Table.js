import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import "react-data-grid/lib/styles.css";
import { IoRefresh } from "react-icons/io5";
import React from "react";
import "./Raffle.css";

export default function Table() {
  return (
    <>
      <Box className="box-raffle-table-header">
        <Button
          rightIcon={<IoRefresh />}
          colorScheme="teal"
          variant="outline"
          marginBottom={15}
          marginRight={3}
          marginLeft={3}
        >
          Recargar tabla
        </Button>
        <Box className="box-input" marginRight={3} marginLeft={3}>
          <FormControl className="formcontrol-component">
            <FormLabel>Celda</FormLabel>
            <Input placeholder="Ej. 16R" size={"lg"} />
            <FormHelperText>
              No utiices espacios, no distingue entre mayúsculas y minúsculas
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
      {/* TABLA */}
      {/* <TableContainer>
        <Table variant="outline">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer> */}
    </>
  );
}

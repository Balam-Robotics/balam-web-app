import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import DataGrid from "react-data-grid";
import "react-data-grid/lib/styles.css";
import { IoRefresh } from "react-icons/io5";
import React from "react";
import "./Raffle.css";

export default function Table() {
  const columns = [
    { key: "id", name: "ID" },
    { key: "title", name: "Title" },
  ];

  const rows = [
    { id: 0, title: "Example" },
    { id: 1, title: "Demo" },
  ];

  return (
    <Box className="box-raffle-table">
      <VStack>
        <FormControl marginBottom={15}>
          <FormLabel>Celda</FormLabel>
          <Input placeholder="Por ejemplo: AB16" size={"lg"} />
          <FormHelperText>
            No utiices espacios, no distingue entre mayúsculas y minúsculas
          </FormHelperText>
        </FormControl>
        <Button rightIcon={<IoRefresh />} colorScheme="teal" variant="outline">
          Recargar tabla
        </Button>
      </VStack>
      {/* TABLA */}
      <DataGrid columns={columns} rows={rows} className="datasheet" />
    </Box>
  );
}

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Table,
  Center,
  Text,
  VStack,
} from "@chakra-ui/react";
import "react-data-grid/lib/styles.css";
import { IoRefresh } from "react-icons/io5";
import React from "react";
import "./Raffle.css";

export default function TableView() {
  return (
    <>
      <VStack className="box-raffle-table-header">
        <Button
          rightIcon={<IoRefresh />}
          colorScheme="teal"
          variant="outline"
          isLoading={true}
          loadingText="Actualizando datos"
        >
          Recargar tabla
        </Button>
        <Text className="text-header-subtitle2">
          Aquí podrás consultar el estado de la tabla de la rifa.
        </Text>
      </VStack>
      {/* TABLA */}
      <Box className="table-box">
        <TableContainer>
          <Table variant="striped" size="sm">
            <Thead>
              <Tr>
                <Th isNumeric>-</Th>
                <Th isNumeric>1</Th>
                <Th isNumeric>2</Th>
                <Th isNumeric>3</Th>
                <Th isNumeric>4</Th>
                <Th isNumeric>5</Th>
                <Th isNumeric>6</Th>
                <Th isNumeric>7</Th>
                <Th isNumeric>8</Th>
                <Th isNumeric>9</Th>
                <Th isNumeric>10</Th>
                <Th isNumeric>11</Th>
                <Th isNumeric>12</Th>
                <Th isNumeric>13</Th>
                <Th isNumeric>14</Th>
                <Th isNumeric>15</Th>
                <Th isNumeric>16</Th>
                <Th isNumeric>17</Th>
                <Th isNumeric>18</Th>
                <Th isNumeric>19</Th>
                <Th isNumeric>20</Th>
                <Th isNumeric>21</Th>
                <Th isNumeric>22</Th>
                <Th isNumeric>23</Th>
                <Th isNumeric>24</Th>
                <Th isNumeric>25</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td className="headcol">A</Td>
              </Tr>
              <Tr>
                <Td>B</Td>
              </Tr>
              <Tr>
                <Td>C</Td>
              </Tr>
              <Tr>
                <Td>D</Td>
              </Tr>
              <Tr>
                <Td>E</Td>
              </Tr>
              <Tr>
                <Td>F</Td>
              </Tr>
              <Tr>
                <Td>G</Td>
              </Tr>
              <Tr>
                <Td>H</Td>
              </Tr>
              <Tr>
                <Td>I</Td>
              </Tr>
              <Tr>
                <Td>J</Td>
              </Tr>
              <Tr>
                <Td>K</Td>
              </Tr>
              <Tr>
                <Td>L</Td>
              </Tr>
              <Tr>
                <Td>M</Td>
              </Tr>
              <Tr>
                <Td>N</Td>
              </Tr>
              <Tr>
                <Td>O</Td>
              </Tr>
              <Tr>
                <Td>P</Td>
              </Tr>
              <Tr>
                <Td>Q</Td>
              </Tr>
              <Tr>
                <Td>R</Td>
              </Tr>
              <Tr>
                <Td>S</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

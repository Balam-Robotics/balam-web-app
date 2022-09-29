import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import "./Raffle.css";
import Header from "./Header";
import PrizesGrid from "./PrizesGrid";
import TableView from "./TableView";
import TicketCheck from "./TicketCheck";

export default function Raffle() {
  return (
    <>
      <Header />
      <Tabs variant={"line"} align={"center"}>
        <TabList>
          <Tab>Inicio</Tab>
          <Tab>Tabla</Tab>
          <Tab>Consulta tu boleto</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PrizesGrid />
          </TabPanel>
          <TabPanel>
            <TableView />
          </TabPanel>
          <TabPanel>
            <TicketCheck />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

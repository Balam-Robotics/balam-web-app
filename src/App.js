import { useColorMode } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import Events from "./pages/Events";
import History from "./pages/History";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";
import Team from "./pages/Team";
import Raffle from "./pages/Raffle";

function App() {
  const { toggleColorMode } = useColorMode();
  toggleColorMode();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/raffle" element={<Raffle />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

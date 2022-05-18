import { Image } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/img/placeholders/Balam_logo_full.png";

export default function Home() {
  return (
    <div>
      <Image src={Logo} boxSize={650} objectFit="contain" />
    </div>
  );
}

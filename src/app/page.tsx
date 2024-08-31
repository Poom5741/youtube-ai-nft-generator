import Image from "next/image";
import styles from "./page.module.css";
import { ConnectButton, ConnectEmbed } from "thirdweb/react";
import { client } from "./client";
import { AIGenerator } from "../../components/AIGenerator";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <h1>AI NFT GENERATOR</h1>
      <ConnectEmbed client={client} />
      <AIGenerator />
    </div>
  );
}

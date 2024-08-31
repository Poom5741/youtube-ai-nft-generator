"use client";
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";
import { client } from "@/app/client";
export const AIGenerator = () => {
  const account = useActiveAccount();
  if (account) {
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
        <ConnectButton client={client} />
      </div>
    );
  }
};

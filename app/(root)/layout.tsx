import StreamVideoProvider from "@/provider/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";
export const metadata: Metadata = {
  title: "UnityMeet",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const RouteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RouteLayout;

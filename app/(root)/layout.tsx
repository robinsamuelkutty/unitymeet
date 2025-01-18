import StreamVideoProvider from "@/provider/StreamClientProvider";
import React, { ReactNode } from "react";

const RouteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RouteLayout;

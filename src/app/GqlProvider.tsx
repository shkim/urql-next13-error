"use client";

import React from "react";
import { UrqlProvider } from "@urql/next";
import { createUrqlClientAndSsr } from "@/graphql";

export default function GqlProvider({ children }: React.PropsWithChildren) {
  const [client, ssr] = React.useMemo(() => {
    console.log("GqlProvider useMemo called");
    return createUrqlClientAndSsr();
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}

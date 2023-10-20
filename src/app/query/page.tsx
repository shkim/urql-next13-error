"use client";

import { useAllFilmsQuery } from "@/graphql/generated";

export default function QueryPage() {
  const [query] = useAllFilmsQuery({ requestPolicy: "network-only" });
  return (
    <div className="p-3">
      query data: {query.data?.allFilms?.totalCount}
      <p className="p-5">
        Please open Developer Tools and <b>Reload</b> this page.
        <br />
        And check the console: infinite GqlProvider initialization logs.
      </p>
    </div>
  );
}

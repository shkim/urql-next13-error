import {
  createClient,
  errorExchange,
  fetchExchange,
  ssrExchange,
  cacheExchange,
  type Client,
  type CombinedError,
  type Operation,
  SSRExchange,
} from "@urql/next";

const GQL_ENDPOINT =
  "https://swapi-graphql.netlify.app/.netlify/functions/index";

export function createUrqlClientAndSsr(): [Client, SSRExchange] {
  const ssr = ssrExchange();
  return [
    createClient({
      url: GQL_ENDPOINT,
      exchanges: [
        cacheExchange,
        ssr,
        errorExchange({
          onError: (error: CombinedError, operation: Operation) => {
            console.log("errorExchange.onError:", error);
          },
        }),
        fetchExchange,
      ],
      suspense: true,
    }),
    ssr,
  ];
}

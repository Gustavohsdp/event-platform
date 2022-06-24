import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4syi6n72obz01yx02ndff9a/master",
  cache: new InMemoryCache(),
});

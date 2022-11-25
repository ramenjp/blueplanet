import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
import { getProfilesQuery } from "./queries/getProfileQuery";
import { apolloClient } from ".";

const query = getProfilesQuery;

export const getLensProfiles = async () => {
  const response = await apolloClient.query({
    query: gql(query),
  });
  console.log("Lens example data: ", response);
  return response.data.exploreProfiles.items;
};

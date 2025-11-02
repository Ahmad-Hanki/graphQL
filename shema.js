// int, float, string, boolean, ID
// ! is required field
export const typeDefs = `#graphql
type Game {
    id: ID!, 
    title: String!
    platform: [String!]
}

type Review {
    id: ID!,
    rating: Int!,
    content: String!
}

type Author {
    id: ID!,
    name: String!,
    verified: Boolean!
}

type Query { 
    reviews: [Review]
    games: [Game]
    authors: [Author]
}
`;

// the Quay type is the entry point for all read operations in a GraphQL API. ITS NOT OPTIONAL

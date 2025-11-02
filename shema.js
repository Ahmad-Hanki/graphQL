// int, float, string, boolean, ID
// ! is required field
export const typeDefs = `#graphql
type Game {
    id: ID!, 
    title: String!
    platform: [String!]
    reviews: [Review!]
}

type Review {
    id: ID!,
    rating: Int!,
    content: String!
    game: Game!
    author: Author!
}

type Author {
    id: ID!,
    name: String!,
    verified: Boolean!
    reviews: [Review!]
}

type Query { 
    reviews: [Review]
    games: [Game]
    authors: [Author]
    review(id:ID!): Review
    game(id: ID!): Game
    author(id: ID!): Author
}
`;

// the Query type is the entry point for all read operations in a GraphQL API. ITS NOT OPTIONAL

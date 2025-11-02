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

    # 
    review(id:ID!): Review
    game(id: ID!): Game
    author(id: ID!): Author
}

type Mutation {
    deleteGame (id: ID!): [Game] 
    addGame (game: NewGameInput!): Game!

    updateGame (id: ID!, game: UpdateGameInput!): Game!
}


input NewGameInput {
    title: String!
    platform: [String!]!
}

input UpdateGameInput {
    title: String
    platform: [String!]
}       
`;

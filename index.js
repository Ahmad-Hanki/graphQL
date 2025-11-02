import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./shema.js";
import { authors, games, reviews } from "./_db.js"; // ✅ add .js

// server setup

const resolvers = {
  Query: {
    games: () => {
      return games;
    },
    authors: () => {
      return authors;
    },
    reviews: () => {
      return reviews;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("server ready at port 4000");

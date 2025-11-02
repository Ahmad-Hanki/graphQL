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

    game: (parents, args, context) => {
      const { id } = args;
      console.log("parent in Game ", parents); // undefined
      console.log("args in Game ", args); // { id: '2' }
      return games.find((game) => game.id == id);
    },

    author: (parents, args, context) => {
      const { id } = args;
      return authors.find((author) => author.id == id);
    },
    review: (parents, args, context) => {
      const { id } = args;
      return reviews.find((review) => review.id == id);
    },
  },

  Game: {
    reviews(parents, args, context) {
      console.log("parent in Game ", parents); // { id: '2', title: 'God of War', author_id: '2' }
      console.log("args in Game ", args); // {}
      return reviews.filter((review) => review.game_id == parents.id);
    },
  },

  Author: {
    reviews(parents, args, context) {
      console.log("parent in Author ", parents);
      console.log("args in Author ", args);
      return reviews.filter((review) => review.author_id == parents.id);
    },
  },

  Review: {
    author(parents, args, context) {
      console.log("parent in Review ", parents);
      console.log("args in Review ", args);
      return authors.find((author) => author.id == parents.author_id);
    },
    game(parents, args, context) {
      console.log("parent in Review ", parents);
      console.log("args in Review ", args);
      return games.find((game) => game.id == parents.game_id);
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

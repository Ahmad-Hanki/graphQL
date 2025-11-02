export const games = [
  {
    id: "1",
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch", "Wii U"],
  },
  { id: "2", title: "God of War", platform: ["PlayStation 4"] },
  { id: "3", title: "Halo Infinite", platform: ["Xbox Series X", "PC"] },
  {
    id: "4",
    title: "Cyberpunk 2077",
    platform: ["PC", "PlayStation 4", "Xbox One"],
  },
  { id: "5", title: "Minecraft", platform: ["PC", "Mobile", "Consoles"] },
];

export const authors = [
  { id: "1", name: "Shigeru Miyamoto", verified: true },
  { id: "2", name: "Hideo Kojima", verified: true },
  { id: "3", name: "Phil Spencer", verified: true },
  { id: "4", name: "Todd Howard", verified: false },
  { id: "5", name: "Notch", verified: false },
];

export const reviews = [
  {
    id: "1",
    rating: 9,
    content:
      "An incredible open-world experience with stunning visuals and engaging gameplay.",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    rating: 10,
    content:
      "A masterpiece that redefines the action-adventure genre with its deep narrative and combat system.",
    author_id: "2",
    game_id: "2",
  },
  {
    id: "3",
    rating: 8,
    content:
      "A solid entry in the Halo series with a compelling multiplayer experience.",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "4",
    rating: 7,
    content:
      "Despite its rocky launch, the game offers a unique cyberpunk experience with vast customization options.",
    author_id: "4",
    game_id: "4",
  },
  {
    id: "5",
    rating: 9,
    content:
      "A creative sandbox game that allows players to build and explore limitless worlds.",
    author_id: "5",
    game_id: "5",
  },
];

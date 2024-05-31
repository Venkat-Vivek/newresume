export const templatesList = [
  "azurill",
  "bronzor",
  "chikorita",
  "ditto",
  "gengar",
  "glalie",
  "kakuna",
  "leafish",
  "nosepass",
  "newresume",
  "onyx",
  "pikachu",
  "rhyhorn",
] as const;

export type Template = (typeof templatesList)[number];

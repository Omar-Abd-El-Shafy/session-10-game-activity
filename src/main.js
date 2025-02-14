import { initializeGame } from "./initGame.js";
import { checkGameOver } from "./checkGameOver.js";
import { movePlayer } from "./movePlayer.js";
import { calculateScore } from "./calculateScore.js";

const playerActions = [
  { action: "jump", points: 10 },
  { action: "collect coin", points: 20 },
  { action: "defeat enemy", points: 30 },
];
initializeGame().then(() =>
  movePlayer("Left").then(() =>
    calculateScore(playerActions).then(() => checkGameOver())
  )
);

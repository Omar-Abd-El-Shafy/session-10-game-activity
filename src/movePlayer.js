export function movePlayer(direction) {
  return new Promise((resolve) => {
    console.log(`Player is moving ${direction}`);
    setTimeout(() => {
      console.log("Player has moved");
      resolve();
    }, 1000);
  });
}

movePlayer("left").then(() => console.log("Test complete: player has moved"));

export function movePlayer(direction) {
  return new Promise((resolve) => {
    console.log(`Player is moving ${direction}`);
    setTimeout(() => {
      console.log("Player has moved");
      resolve();
    }, 1000);
  });
}

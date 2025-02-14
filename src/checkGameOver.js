export function checkGameOver() {
    return new Promise((resolve) => {
        console.log("Checking game status...");
        setTimeout(() => {
            let gameOver = Math.random() < 0.5; // Random condition
            if (gameOver) {
                console.log("Game over!");
                resolve("Game Over");
            } else {
                console.log("Continue playing!");
                resolve("Continue");
            }
        }, 2000);
    });
}

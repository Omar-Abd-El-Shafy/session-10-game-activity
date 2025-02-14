
console.log("fady")
export function calculateScore() {
    return new Promise((resolve) => {
    console.log("Initializing game...");
    setTimeout(() => {
    console.log("Game initialized successfully!");
    resolve();
    }, 1000);
    });
    }
    
    calculateScore().then(() => console.log("Test complete:calculateScore"));
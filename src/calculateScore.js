console.log("fady");

export function calculateScore(playerActions) {
    return new Promise((resolve) => {
        console.log("Calculating score...");
        
        setTimeout(() => {
            let score = playerActions.reduce((total, action) => total + action.points, 0);
            
            console.log(`Score calculated: ${score}`);
            resolve(score);
        }, 1000);
    });
}


const playerActions = [
    { action: "jump", points: 10 },
    { action: "collect coin", points: 20 },
    { action: "defeat enemy", points: 30 }
];

// calculateScore(playerActions).then((score) => {
//     console.log(`Test complete: calculateScore - Final Score: ${score}`);
// });

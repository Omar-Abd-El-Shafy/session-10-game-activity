function calculateScore(events) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let score = events.length * 10;
            console.log(`Score calculated: ${score}`);
            resolve(score);
        }, 1000);
    });
}
    
    initializeGame().then(() => console.log("Test complete: initializeGame"));
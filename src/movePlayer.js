export function movePlayer(direction) {
    return new Promise ((resolve) => {
        console.log(`Moving player at ${direction}`)
        resolve();
    }, 1000)
}


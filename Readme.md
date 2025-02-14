██████╗ ███████╗ ██████╗ ██╗  ██╗     ██████╗ ██╗   ██╗███████╗██████╗ 
██╔══██╗██╔════╝██╔═══██╗██║ ██╔╝     ██╔══██╗██║   ██║██╔════╝██╔══██╗
██║  ██║█████╗  ██║   ██║█████╔╝█████╗██████╔╝██║   ██║█████╗  ██████╔╝
██║  ██║██╔══╝  ██║   ██║██╔═██╗ ╚════╝██╔═══╝ ██║   ██║██╔══╝  ██╔═══╝ 
██████╔╝███████╗╚██████╔╝██║  ██╗     ██║     ╚██████╔╝███████╗██║     
╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝     ╚═╝      ╚═════╝ ╚══════╝╚═╝     

# 🎮 `checkGameOver` – The Fate Decider 🎲  

> **"Do you continue your journey, or is this the end?"** – This function holds your fate.  

## 🚀 **What Does It Do?**  
This function **checks if the game is over** with a **suspenseful 2-second delay**. Then, it makes a completely random decision:  

✅ **"Continue"** – You live to fight another day.  
❌ **"Game Over"** – Your journey ends here.  

---

## 🛠️ **How to Use It**  

### 1️⃣ **Summon the Function**
```js
import { checkGameOver } from "./yourFile.js";
```
### 2️⃣ **Call It & Pray**
```js
checkGameOver().then((status) => {
    console.log("🔮 Game Status:", status);
});
```

---

## 🎭 **What Happens Behind the Scenes?**  

```txt
[1] ⏳ Checking game status...  (dramatic pause)
[2] 🎲 Rolling the dice... (RNG decides your fate)
[3] ✅ "Continue!"  or  ❌ "Game Over!"
[4] 📢 Logs the final result & resolves the promise
```

---

## 🎰 **Possible Outcomes**  

**🟢 Scenario 1: You Survive!**  
```
Checking game status...
Continue playing!
🔮 Game Status: Continue
```

**🔴 Scenario 2: You're Doomed.**  
```
Checking game status...
Game over!
🔮 Game Status: Game Over
```

---

## 🔥 **Why is This Epic?**  
- 🕹️ **Feels Like a Real Game Mechanic** – Suspense, randomness, and fate.  
- ⏳ **Asynchronous & Awaitable** – Use it in real-time game logic.  
- 🎲 **Pure RNG Magic** – No two outcomes are the same.  

---

💀 **Will your game survive? Only one way to find out...**  
🚧 *No actual games were harmed in the making of this function.* 🚧  

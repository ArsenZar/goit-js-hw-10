const timerIds = []; // тут будемо зберігати всі інтервали
let timerCount = 0;
let timerP = document.querySelector("#time");
const startButton = document.querySelector("#start");

let lastUpdateTime = null;
const gapP = document.querySelector("#gap");

document.querySelector("#start").addEventListener("click", (event) => {
    const id = setInterval(() => {
        const currentTime = Date.now();
        console.log(currentTime);
        const delay = 0;

        if (lastUpdateTime !== null) {
        delay = currentTime - lastUpdateTime;
        console.log(`⏱ Різниця між тиками: ${delay} мс`);
        }

    lastUpdateTime = currentTime;
    gapP.textContent = delay;


    timerCount++;
    timerP.textContent = timerCount;
  }, 1000);

    timerIds.push(id); // додаємо ID до масиву
    console.log("🚀 Таймер запущено:", id + "; All:" + timerIds);

    checkButtonStart();
});

function checkButtonStart() {
    if (timerIds.length != 0) {
        startButton.innerHTML = "FASTEEEER";
    } else {
        startButton.innerHTML = "Start";
    }
}

document.querySelector("#stop").addEventListener("click", () => {
    // проходимося по всіх ID та зупиняємо таймери
    let lengthOfId = timerIds.length;
    console.log("We stop " + timerIds[lengthOfId - 1]);
    clearInterval(timerIds[timerIds.length - 1]);
    timerIds.splice(lengthOfId - 1, 1);
    console.log("All: " + (timerIds.length ? timerIds : "clear"));
    checkButtonStart();
});


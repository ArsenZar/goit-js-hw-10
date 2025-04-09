let timerId = null;

let timerCount = 0;
let timerP = document.querySelector("#time");

document.querySelector("#start").addEventListener("click", () => {
  // Створюємо таймер і зберігаємо його ID
  timerId = setInterval(() => {
      timerCount++;
      timerP.textContent = timerCount;
  }, 1000);
  console.log("🚀 Таймер запущено:", timerId);
});

document.querySelector("#stop").addEventListener("click", () => {
  // Якщо таймер існує — скасовуємо
  clearTimeout(timerId);
  console.log("🛑 Таймер скасовано:", timerId);
});

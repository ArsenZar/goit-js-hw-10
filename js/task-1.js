let timerId = null;

document.querySelector("#start").addEventListener("click", () => {
  // Створюємо таймер і зберігаємо його ID
  timerId = setTimeout(() => {
    console.log("⏰ Таймер спрацював!");
  }, 3000);
  console.log("🚀 Таймер запущено:", timerId);
});

document.querySelector("#stop").addEventListener("click", () => {
  // Якщо таймер існує — скасовуємо
  clearTimeout(timerId);
  console.log("🛑 Таймер скасовано:", timerId);
});

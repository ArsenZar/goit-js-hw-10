// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const buttonStart = document.querySelector('[data-start]');

const makePromise = ({ delay, shouldResolve }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve == "fulfilled" ? resolve(delay) : reject(delay);
    }, delay);
  });
};

buttonStart.addEventListener("click", (e) => {
  e.preventDefault();

  const takeMs = Number(document.querySelector('[data-delay]').value);
  const takeState = document.querySelector('input[name="state"]:checked');

  console.log(takeState.value);

  makePromise({ delay: takeMs, shouldResolve: takeState.value })
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    }) // "A"
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });

    });
});

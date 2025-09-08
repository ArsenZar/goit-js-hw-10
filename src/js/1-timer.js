import flatpickr from "flatpickr";
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector('button[data-start]');
const allSpans = document.querySelectorAll('.value');
startBtn.disabled = true;
let userSelectedDate = null;

const options = {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    if (selectedDates[0].getTime() <= Date.now()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
        timeout: 5000,
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2734/2734822.png',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      userSelectedDate = selectedDates[0].getTime();
    }
  },
};

flatpickr("#datetime-picker", options);

startBtn.addEventListener('click', () => {
  if (userSelectedDate == null) return;

  startBtn.disabled = true;
  document.querySelector('#datetime-picker').disabled = true;

  const intervalID = setInterval(() => {
    let diff = userSelectedDate - Date.now();
    console.log(diff);
    const dataTimer = convertMs(diff);
    if (diff <= 0) {
      clearInterval(intervalID);
      iziToast.success({
        title: 'OK',
        message: 'Finish time!',
        position: 'topRight',
      });
      document.querySelector('#datetime-picker').disabled = false;
    } else {
      updateTimerUI(dataTimer);
    };
  }, 1000);
});

function updateTimerUI(dataTimer) {
  let i = 0;
  for (const key in dataTimer) {
    allSpans[i].textContent = dataTimer[key];
    i++;
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(timeWithoutZero) {
  return String(timeWithoutZero).padStart(2, '0');
}




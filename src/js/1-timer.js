import flatpickr from "flatpickr";
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;

const options = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    onClose(selectedDates) {
        const diff = selectedDates[0].getTime() - Date.now(); // різниця у мс
        if (diff <= 0) {
            iziToast.error({
                message: 'Please choose a date in the future',
                position: 'topRight',
                timeout: 5000,
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/2734/2734822.png',
            });
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false; 
        }
    },
};

flatpickr("#datetime-picker", options);



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(timeObj) {
    let formated = {};
    for (const key in timeObj) {
        formated[key] = String(timeObj[key]).padStart(2, '0');
    }
    return formated;
}

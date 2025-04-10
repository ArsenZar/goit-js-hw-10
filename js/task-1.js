const isSuccess = false;
const isSuccess2 = false;

// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess || isSuccess2) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});


/*
 Це — імітація асинхронної операції, наприклад, запит на сервер.

Якщо isSuccess === true, викликається resolve(...).
Якщо false, викликається reject(...).

Усе, що відбувається в setTimeout, в реальному житті — 
це може бути запит на сервер, доступ до бази даних або щось, що займає час.
*/

// Registering promise callbacks
promise
    .then(value => {
        console.log(value); // "Success! Value passed to resolve function"
    })
    .catch(error => {
        console.log(error);
  });;

/*
А then(...) — обробник результату:
Тобто:
.then(onFulfilled, onRejected)
Перший аргумент — що робити, коли все добре.
Другий аргумент — що робити, коли сталася помилка.
*/
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve(console.log("Success! Value passed to resolve function"));
    } else {
      reject(console.log("Error! Error passed to reject function"));
    }
  }, 2000);
});

console.log(promise); // Об'єкт промісу

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(2), 2000);
});

Promise.race([p1, p2])
	.then(value => console.log(value)) // 1
	.catch(error => console.log(error));

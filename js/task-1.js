const p1 = Promise.resolve(1);
const p2 = Promise.reject("Rejected promise 2");
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3])
	.then(values => console.log(values));
	// [
	//   { status: "fulfilled", value: 1}, 
  //   { status: "rejected", value: "Rejected promise 2"},
  //   { status: "fulfilled", value: 3}
  // ]

const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
			if(shouldResolve) {
                resolve(console.log(value));
			} else {
				reject(value)
			}
		}, delay);
  });
};


makePromise({
	value: "Some value",
	delay: 2000,
	shouldResolve: true
})

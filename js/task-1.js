// Виконується першою
console.log("First log");

setTimeout(() => {
	// Виконується третьою, через 2000 мілісекунд (2 секунди)
  console.log("Second log");
}, 2000);

// Виконується другою
console.log("Third log");


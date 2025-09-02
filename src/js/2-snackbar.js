// let ourResoult = true;
// let listClient = {
//     name: "Alex",
//     sureName: "Green"
// }

// console.log(listClient.sureName);


// const promice = new Promise((ready, problem) => {
//     setTimeout(() => { 
//         if (ourResoult) {
//             ready(["all good", 5]);
//         } else {
//             problem("problem");
//         }
//     }, 2000);
//  });

// promice
//     .then(value => {
//         return [ value[0], value[1] * 2 ];
//     })
//     .then((value) => { 
//         console.log(value);
//         return [value[0], value[1] + 3];
//     })
//     .then((value) => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.log("OGO, tut error");
//     })
//     .finally(
//         () => { console.log(`finaly here`) }
//     );

const fetchUserFromServer = username => {
    return new Promise((resolve, reject) => {
        console.log(`Fetching data for ${username}`);

        setTimeout(() => {
            // Change value of isSuccess variable to simulate request status
            const isSuccess = true;

            if (isSuccess) {
                resolve("success value");  // значенням параметра resolve буде колбек-функція методу then()
            } else {
                reject("error");  // значенням параметра reject буде колбек-функція методу catch()
            }
        }, 2000);
    });
};

fetchUserFromServer("Mango")
    .then(user => console.log(user))
    .catch(error => console.error(error));

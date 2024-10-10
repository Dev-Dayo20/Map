// const fruits = new Map([
//   ["Apple", 500],
//   ["Banana", 600],
//   ["Watermelon", 700],
// ]);
// const display = document.querySelector("p");
// let text = "";
// fruits.forEach((value, key) => {
//   text += ` <strong>${key}</strong> = ${value} <br> `;
// });
// display.innerHTML = text;

// // A Quick Recap on the addition assignment operator
// let arr = [1, 2, 3];
// arr[0] += 10;
// console.log(arr);

// let num = 5;
// num += 3;
// console.log(num);

// let str = "Abdul";
// str += "kabir";
// console.log(str);

// let total = 0;
// let number = [1, 2, 3, 4, 5];
// for (let i = 0; i < number.length; i++) {
//   total += number[i];
// }
// console.log(total);

// let sentence = "";
// let words = ["This ", "is ", "a ", "sentence"];
// for (let i = 0; i < words.length; i++) {
//   sentence += words[i];
// }
// console.log(sentence);

// let user = {
//   name: "Kabir",
//   point: 10,
// };

// user.point += 5;

// console.table(user);

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num, index, arr) => {
//   arr[index] = num * 2;
// });
// console.log(numbers);

// const ourStaffs = document.getElementById("Staffs");
// let ourWorkers = [
//   { name: "Adam", age: 20, role: "graphic designer" },
//   { name: "Kabir", age: 24, role: "software developer" },
//   { name: "Safiya", age: 20, role: "accountant" },
// ];

// let text2 = "";
// ourWorkers.forEach((staff) => {
//   text2 += `${staff.name} is ${staff.age}. Is our ${staff.role} <br> `;
// });
// ourStaffs.innerHTML = text2;

// //Asyn in javascripts
// console.log("Start");

// setTimeout(() => {
//   console.log("This will run after the intended timeout");
// }, 2000);

// console.log("End");

//Using asyn & await
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched");
//     }, 3000);
//   });
// };
// const getData = async () => {
//   console.log("Fetching data");
//   const result = await fetchData();
//   console.log(result);
// };
// getData();

// btnClick.addEventListener("click", async (event) => {
//   event.preventDefault();
//   let theUserInput = userInput.value;
//   inputDisplay.innerHTML = "Please wait your name is processing...";

//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 3000);
//   });
//   inputDisplay.innerHTML = `Your name is ${theUserInput}`;
// });

const fetchData = (shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data fetched successfully");
      } else {
        reject("Failure to fetch data!");
      }
    }, 2000);
  });
};
const loadData = async () => {
  try {
    console.log("fetching data...");
    const result = await fetchData(false);
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
};
loadData();

const userInput = document.getElementById("input-async");
const btnClick = document.getElementById("btn-async");
const inputDisplay = document.getElementById("input-name");

const loginUser = (userInput) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userInput === "Umar") {
        resolve((inputDisplay.innerHTML = "You are successfully login!"));
      } else {
        reject(
          (inputDisplay.innerHTML = `${userInput} is not a valid name. 
            Please enter a valid name`)
        );
      }
    }, 1500);
  });
};

const login = async (userInput) => {
  try {
    inputDisplay.innerHTML = "Loggin in...";
    const result = await loginUser(userInput);
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
};

btnClick.addEventListener("click", () => {
  let theUserInput = userInput.value;
  login(theUserInput);
});

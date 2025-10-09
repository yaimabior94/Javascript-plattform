// ===============================
//  JAVASCRIPT PRACTICE MENU
// ===============================

function showMenu() {
  console.log(`
🟢 EASY LEVEL
1. Print Numbers (1–10)
2. Even or Odd Checker
3. Simple Calculator (Addition)

🟡 MEDIUM LEVEL
4. Grade Checker
5. Multiplication Table Generator
6. Array of Fruits

🔵 ADVANCED LEVEL
7. Find the Largest Number
8. Reverse a String
9. Prime Number Checker
10. Array Filtering (Adults Only)
`);
}

function runProgram() {
  showMenu();

  const choice = parseInt(prompt("Enter a number (1–10):"));

  switch (choice) {

    // 🟢 EASY LEVEL
    case 1: {
      for (let i = 1; i <= 10; i++) {
        console.log(i);
      }
      break;
    }

    case 2: {
      const number = parseInt(prompt("Enter a number:"));
      if (number % 2 === 0) {
        console.log(`${number} is even.`);
      } else {
        console.log(`${number} is odd.`);
      }
      break;
    }

    case 3: {
      const num1 = parseFloat(prompt("Enter the first number:"));
      const num2 = parseFloat(prompt("Enter the second number:"));
      const sum = num1 + num2;
      console.log(`The sum is: ${sum}`);
      break;
    }

    // 🟡 MEDIUM LEVEL
    case 4: {
      const score = parseInt(prompt("Enter your score:"));
      if (score >= 90 && score <= 100) {
        console.log("Grade: A");
      } else if (score >= 80) {
        console.log("Grade: B");
      } else if (score >= 70) {
        console.log("Grade: C");
      } else {
        console.log("Fail");
      }
      break;
    }

    case 5: {
      const n = parseInt(prompt("Enter a number:"));
      for (let i = 1; i <= 10; i++) {
        console.log(`${n} × ${i} = ${n * i}`);
      }
      break;
    }

    case 6: {
      const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
      for (const fruit of fruits) {
        console.log(fruit);
      }
      break;
    }

    // 🔵 ADVANCED LEVEL
    case 7: {
      const numbers = [12, 5, 20, 25, 7];
      let largest = numbers[0];

      for (const num of numbers) {
        if (num > largest) {
          largest = num;
        }
      }

      console.log(`The largest number is: ${largest}`);
      break;
    }

    case 8: {
      const word = prompt("Enter a word:");
      let reversed = "";

      for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
      }

      console.log(`Reversed word: ${reversed}`);
      break;
    }

    case 9: {
      const primeNum = parseInt(prompt("Enter a number:"));
      let isPrime = true;

      if (primeNum <= 1) {
        isPrime = false;
      } else {
        for (let i = 2; i <= Math.sqrt(primeNum); i++) {
          if (primeNum % i === 0) {
            isPrime = false;
            break;
          }
        }
      }

      if (isPrime) {
        console.log(`${primeNum} is a prime number.`);
      } else {
        console.log(`${primeNum} is not a prime number.`);
      }
      break;
    }

    case 10: {
      const ages = [12, 18, 25, 30, 15];
      const adults = [];

      for (const age of ages) {
        if (age >= 18) {
          adults.push(age);
        }
      }

      console.log(`Adults (18 or above): ${adults}`);
      break;
    }

    default: {
      console.log("Invalid choice! Please enter a number between 1 and 10.");
    }
  }
}

// Run the program
runProgram();


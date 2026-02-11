import promptSync from "prompt-sync";
const prompt = promptSync();

const year = Number(prompt("Enter a year to check if it is a leap year: "));

const isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

if (Number.isNaN(year)) {
  console.log("Please, enter a number");
} else if (!Number.isInteger(year)) {
  console.log("Please, enter a whole number (no decimals)");
} else if (year < 1 || year > 9999) {
  console.log("Invalid year!");
} else if (isLeapYear) {
  console.log(`Yes, ${year} is a leap year`);
} else {
  console.log(`No, ${year} is not a leap year`);
}

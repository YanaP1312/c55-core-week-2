import promptSync from "prompt-sync";
const prompt = promptSync();

const year = Number(prompt("Enter a year to check if it is a leap year: "));

if (year >= 1 && year <= 9999) {
  if (!(year % 4)) {
    if (!(year % 100) && !(year % 400)) {
      console.log(`Yes, ${year} is a leap year`);
    } else if (year % 100) {
      console.log(`Yes, ${year} is a leap year`);
    } else {
      console.log(`No, ${year} is not a leap year`);
    }
  } else {
    console.log(`No, ${year} is not a leap year`);
  }
} else {
  console.log("Invalid year! Enter year from 1 till 9999");
}

import promptSync from "prompt-sync";
const prompt = promptSync();

const year = Number(prompt("Enter a year to check if it is a leap year: "));

if (year < 1 || year > 9999) {
    console.log("Invalid year!");
} else if (!(year % 400) || (!(year % 4) && (year % 100))) {
    console.log(`Yes, ${year} is a leap year`);
} else {
    console.log(`No, ${year} is not a leap year`);
}

const prompt = require("prompt-sync")({ sigint: true });

// Electricity Bill================================================================================
let i = parseInt(prompt("Enter a Number"));

function eBill(i) {
  if (i <= 75) {
    return i * 4.19;
  }

  if (i <= 200) {
    const sevToTwo = i - 75;
    return 75 * 4.19 + sevToTwo * 5.72;
  }
  if (i <= 300) {
    const twoToThree = i - 200;
    return 75 * 4.19 + 125 * 5.72 + twoToThree * 6;
  }
  if (i <= 400) {
    const threeToFour = i - 300;
    return 75 * 4.19 + 125 * 5.72 + 100 * 6 + threeToFour * 6.34;
  }
  if (i <= 600) {
    const fourToSix = i - 400;
    return 75 * 4.19 + 125 * 5.72 + 100 * 6 + 100 * 6.34 + fourToSix * 9.94;
  }
  if (i > 600) {
    const sixUp = i - 600;
    return (
      75 * 4.19 + 125 * 5.72 + 100 * 6 + 100 * 6.34 + 200 * 9.94 + sixUp * 11.46
    );
  }
}

let demand = eBill(i);
let vat = demand * 0.05;
let vatInclude = demand + vat;

console.log("Your Bill Is: " + vatInclude);

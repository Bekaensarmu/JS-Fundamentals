const arg = process.argv[2];
const number = Number(arg);

if (!isNaN(number) && Number.isInteger(number)) {
  console.log(`My number is ${number}`);
}
else {
  console.log("not a number");
}
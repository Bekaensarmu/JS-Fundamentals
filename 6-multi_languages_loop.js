const line = ["C is fun!", "Python is cool", "Javascript is amazing"];
let output = "";

for (let i = 0; i < line.length; i++) {
    output += line[i];
    if (i < line.length - 1) {
        output += "\n";
    }
}
console.log(output);
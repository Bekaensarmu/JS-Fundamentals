const firstArg = process.argv[2];

if (firstArg === undefined) {
    console.log("No argument");
} else if (firstArg === "0") {
    console.log("Argument found");
}
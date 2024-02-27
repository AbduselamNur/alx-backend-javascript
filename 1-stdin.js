process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("value", (value) => {
  process.stdout.write(`Your name is: ${value}`);
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});

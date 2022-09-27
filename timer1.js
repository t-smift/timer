const args = process.argv.slice(2);
let delay = 1000;
for (const arg of args) {
  if (arg > 0 || arg === Number ) {
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, delay * arg)
  } else {
    continue;
  }
};

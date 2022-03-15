let value = process.argv[2];
const timer = (value) => {
  if (value < 1 || isNaN(value)) {
    return console.log("This is a timer/alarm, please input a valid number");
  } if (value >= 1) {
    setTimeout(() => {
      return console.log(process.stdout.write('\x07'));
    },value);
  }
};

timer(value);
console.log('Hello, world!');

  const functions = require('./functions.js');
const getGreeting = functions.getGreeting;

function main() {
  let greeting = getGreeting();
  console.log(greeting);
}

main();
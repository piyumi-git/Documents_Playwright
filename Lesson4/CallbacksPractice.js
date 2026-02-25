function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}
// Call greet and pass sayGoodbye as the callback
greet("Alice", sayGoodbye);
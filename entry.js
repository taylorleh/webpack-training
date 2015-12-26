// below will fail unless a css loader is specified

// loaders read right -> left
require('./styles.css');
document.write('hello world, the current time is ', require('./displayTime.js'));

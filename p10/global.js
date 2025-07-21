console.log('__filename:', __filename);

console.log('__dirname:', __dirname);

console.log('process.platform:', process.platform);
console.log('process.version:', process.version);

setTimeout(() => {
  console.log('Hello after 2 seconds!');
}, 2000);

const timer = setTimeout(() => {
  console.log('This will not run');
}, 4000);
clearTimeout(timer);

console.log('This is a simple log message');

const buf = Buffer.from('Hello, Buffer!');
console.log('Buffer content:', buf.toString());

global.myGlobalVar = 'I am global';
console.log('Accessing myGlobalVar:', global.myGlobalVar);

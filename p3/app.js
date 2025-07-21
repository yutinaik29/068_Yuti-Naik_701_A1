const readline = require('readline');
const HotelChatBot = require('./chatbot');

const bot = new HotelChatBot();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You: '
});

console.log("Welcome to The Oberoi Resort Chatbot! Type 'exit' to quit.");
rl.prompt();

rl.on('line', (line) => {
  if (line.trim().toLowerCase() === 'exit') {
    console.log('Chatbot: Goodbye! Have a great day!');
    rl.close();
    return;
  }
  const response = bot.getResponse(line.trim());
  console.log(`Chatbot: ${response}`);
  rl.prompt();
}).on('close', () => {
  console.log('Session ended.');
  process.exit(0);
});

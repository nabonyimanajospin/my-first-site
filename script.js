const statusText = document.getElementById('status');
const changeMessageButton = document.getElementById('changeMessage');

const messages = [
  'Ready to customize',
  'Edit the files and redeploy',
  'Your live site updates from GitHub',
  'Small changes are the best way to learn',
];

let messageIndex = 0;

changeMessageButton.addEventListener('click', () => {
  messageIndex = (messageIndex + 1) % messages.length;
  statusText.textContent = messages[messageIndex];
});

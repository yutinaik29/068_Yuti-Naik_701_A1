function add(num) {
  return num < 10 ? '0' + num : num.toString();
}

function getTimestamp() {
  const now = new Date();

  const year = now.getFullYear();
  const month = add(now.getMonth() + 1);
  const day = add(now.getDate());
  const hours = add(now.getHours());
  const minutes = add(now.getMinutes());
  const seconds = add(now.getSeconds());

  return `Current Date: ${year}-${month}-${day}\nCurrent Time: ${hours}:${minutes}:${seconds}`;
}

module.exports = getTimestamp;

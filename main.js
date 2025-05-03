
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const telegramLink = document.getElementById("telegram-link");

telegramLink.href = isMobile 
  ? "tg://resolve?domain=necoI7"
  : "https://t.me/necoI7";
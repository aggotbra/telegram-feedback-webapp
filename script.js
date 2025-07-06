// Инициализация Web App
const tg = window.Telegram.WebApp;
tg.ready();

// Заглушка данных
document.getElementById('content').innerHTML = `
  <p>Здесь в будущем будут ваши предложения и количество голосов.</p>
`;

// Обработка кнопки
document.getElementById('sendFeedback').addEventListener('click', () => {
  tg.sendData('open_feedback_form');
  tg.close();
});

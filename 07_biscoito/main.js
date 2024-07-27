document.addEventListener('DOMContentLoaded', () => {
  const fortunes = [
      "Não há que ser forte. Há que ser flexível.",
      "A maior de todas as torres começa no solo.",
      "A felicidade está ao seu alcance, basta estender a mão.",
      "Algo incrível está prestes a acontecer.",
      "Sua criatividade é sua maior força.",
      "Um sorriso pode mudar o seu dia e o de alguém."
  ];

  const screen1 = document.querySelector('.screen1');
  const screen2 = document.querySelector('.screen2');
  const cookie = document.getElementById('cookie-one');
  const message = document.getElementById('fortune-message');
  const anotherCookieButton = document.getElementById('btnLucky');

  // Remova a classe 'hide' da screen1 para iniciar o jogo
  screen1.classList.remove('hide');

  cookie.addEventListener('click', openCookie);
  anotherCookieButton?.addEventListener('click', resetGame);

  document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !screen1.classList.contains('hide')) {
          openCookie();
      }
  });

function openCookie() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortuneText = fortunes[randomIndex];
    message.textContent = fortuneText;

    //message.classList.add('fade-in');
    //setTimeout(() => message.classList.remove('fade-in'), 2000);

    // Alterna a visibilidade das telas
    screen1.classList.add('hide');
    screen2.classList.remove('hide');

    const fortuneCard = document.getElementById('fortune-card');
    setTimeout(() => {
      fortuneCard.classList.add('show');
    }, 100);
}

function resetGame() {
    // Remove a classe de animação do card e esconde a tela 2
    const fortuneCard = document.getElementById('fortune-card');
    fortuneCard.classList.remove('show');
    screen2.classList.add('hide');
    screen1.classList.remove('hide');
}
});
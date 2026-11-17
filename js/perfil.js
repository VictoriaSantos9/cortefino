document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.profile-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = 'recomendacoes.html';
  });
});

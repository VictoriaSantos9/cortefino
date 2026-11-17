document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('.toggle-password');
  if (!trigger) return;

  trigger.addEventListener('click', () => {
    const input = document.getElementById(trigger.dataset.target);
    if (!input) return;

    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    trigger.textContent = isPassword ? '🙈' : '👁';
  });
});

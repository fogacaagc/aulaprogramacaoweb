/* =========================================================
   🌿 VERDE REFLORESTADO - SCRIPT PRINCIPAL
   Funções:
   → Alternar menu responsivo
   → Simular envio do formulário de cadastro
========================================================= */

// ======== MENU RESPONSIVO ======== //
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em um link (opcional)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ======== FORMULÁRIO DE CADASTRO ======== //
const form = document.querySelector('#form-cadastro');
const msgSucesso = document.createElement('p');
msgSucesso.classList.add('mensagem-sucesso');
msgSucesso.textContent = '✅ Cadastro realizado com sucesso! Obrigado por se voluntariar.';

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // impede o envio real do formulário

    // Simula um envio com breve delay
    form.insertAdjacentElement('afterend', msgSucesso);
    msgSucesso.style.opacity = '0';
    msgSucesso.style.transition = 'opacity 0.8s ease';

    setTimeout(() => {
      msgSucesso.style.opacity = '1';
    }, 100);

    // Limpa os campos após alguns segundos
    setTimeout(() => {
      form.reset();
      msgSucesso.style.opacity = '0';
    }, 4000);
  });
}
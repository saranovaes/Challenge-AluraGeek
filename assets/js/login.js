const email = document.querySelector('[data-email-form]');
const senha = document.querySelector('[data-senha-form]');
const enviar = document.querySelector('[data-enviar]');
const home = document.querySelector('[data-home]');

email.value = 'alurageek@alura.com';

enviar.addEventListener('submit', (evento) => {
    evento.preventDefault()
    if(email.value === 'alurageek@alura.com' && senha.value == '1234') {
        location.href = 'todos-os-produtos.html';
    }else{
        alert('Email ou senha invalido, tente novamente.');
    }
})

home.addEventListener('click', () => {
    location.href = 'index.html';
})
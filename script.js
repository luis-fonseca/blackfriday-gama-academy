document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    const sendingDataMessage = 'Aguarde, enviando dados ...';
    const dataSentMessage = 'Cadastro realizado. Obrigado =]';
    const content = document.querySelector('.content');

    const data = {
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
    };

    e.preventDefault();

    localStorage.setItem('lead', JSON.stringify(data));

    content.innerHTML = sendingDataMessage;

    setTimeout(() => {
      content.innerHTML = dataSentMessage;
    }, 1500);

    e.target.reset();
  });
});

document.getElementById('meuemail').addEventListener('click', function(event) {
    event.preventDefault();
    var subject = encodeURIComponent('Assunto do email');
    var body = encodeURIComponent('Mensagem do e-mail');
    window.location.href = 'mailto:romuloely23@gmail.com?subject=' + subject + '&body=' + body;
  });
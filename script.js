function iniciarContador() {
  const contador = document.getElementById('contador');
  // Data do evento em formato AAAA-MM-DDTHH:mm:ss
  const dataEvento = new Date('2025-11-22T10:00:00');
  
  function atualizarContador() {
    const agora = new Date();
    const diff = dataEvento - agora;
    
    if (diff <= 0) {
      contador.textContent = "🎉 A festa começou! 🎉";
      clearInterval(intervalo);
      return;
    }
    
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    contador.textContent = `Faltam ${dias}d ${horas}h ${minutos}m ${segundos}s para a festa!`;
  }

  atualizarContador();
  const intervalo = setInterval(atualizarContador, 1000);
}

// A reprodução automática de áudio pode ser bloqueada por navegadores,
// então é melhor permitir que o usuário inicie com um clique.
// Esta função pode ser chamada, por exemplo, por um botão "Tocar Música".
function playMusic() {
    const musica = document.getElementById('musica');
    musica.play().catch(error => {
        console.log("Reprodução automática bloqueada pelo navegador.");
    });
}
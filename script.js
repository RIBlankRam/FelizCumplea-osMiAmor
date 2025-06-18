
document.addEventListener('DOMContentLoaded', () => {
  // 🔊 Reproducción automática de música
  const music = document.getElementById('bgMusic');

  function tryPlayMusic() {
    music.play().then(() => {
      console.log("🎵 Audio reproduciéndose automáticamente");
    }).catch((err) => {
      console.warn("🔇 Autoplay bloqueado, esperando clic", err);
      document.body.addEventListener('click', () => {
        music.play();
      }, { once: true });
    });
  }

  tryPlayMusic();


  
  const bee = document.getElementById('Bee');
  const BebiText = document.querySelector('.bee-label'); // nuevo
  const heart = document.getElementById('Heart');
  const msg = document.getElementById('Message');
  const bg = document.getElementById('Background');
  const layer = document.querySelector('.layer');
  const emojiContainer = document.getElementById('emojiContainer');
  const msg1 = document.getElementById('Message1');
  const photoContainer = document.getElementById('photoContainer');
  const finalScreen = document.getElementById('finalScreen'); // nuevo
  const finalMessage = document.getElementById('finalMessage'); // nuevo
  const usAll = document.getElementById('usAll'); // nuevo

  // Evento para la abeja
  
  bee.addEventListener('click', () => {
    bee.classList.remove('active'); // Reinicia animación si es necesario
    void bee.offsetWidth; // Fuerza reflow
    bee.classList.add('active');
    BebiText.style.display = 'none'; // Oculta el texto de la abeja
    showEmojis();
    showMessage();
    photoContainer.style.display = 'block';

    bee.addEventListener('animationend', function handler() {
      heart.style.display = 'block';
      msg.style.display = 'block';
      bg.style.display = 'block';
      if (layer) layer.style.display = 'block';
      bee.removeEventListener('animationend', handler);
      bee.remove();
    });
  });

  heart.addEventListener('click', () => {
  heart.classList.add('active');

  heart.addEventListener('animationend', function handler() {


  // Mostrar pantalla final
  finalScreen.style.display = 'flex';
  finalScreen.style.flexDirection = 'column';
  finalScreen.style.justifyContent = 'center';
  finalScreen.style.alignItems = 'center';
  finalScreen.style.zIndex = '9999';
  
  // Mostrar el mensaje final explícitamente
  showMessageFinal();
  if (finalMessage) {
    usAll.style.display = 'block';
    finalMessage.style.display = 'block';
    finalMessage.style.opacity = '1'; // Asegura visibilidad

  }

  heart.removeEventListener('animationend', handler);
});
  });

  function showMessage() {
    msg1.innerHTML = "<span>🎂🎉¡FELIZ CUMPLEAÑOS MI AMOR!🎂🎉</span> <br> <span>💖DEBORAH CENZANO AGUILAR💖</span>";
    msg1.classList.add('active');
  }
  
  function showMessageFinal(){
    finalMessage.innerHTML = "<span>- La verdad, no se como empezar, ya que hay miles de cosas que quisiera expresarte, pero todo se resume en dos palabras: amor y </span>";
    finalMessage.innerHTML += "<br> <span> agradecimiento, por demostrarme un mundo tan calidoso y glamuroso en tus ojos,</span>";
    finalMessage.innerHTML += "<br> <span> que me hacen sentir vivo y en paz cada que los miro. A veces me pongo a pensar en todo y noto como ha pasado tan rapido el tiempo, tanto que ahora estamos aqui</span>";
    finalMessage.innerHTML += "<br> <span> celebrando tu cumpleaños numero 20, el cumpleaños de mi persona favorita y especial en este mundo. Es debido a ello</span>";
    finalMessage.innerHTML += "<br> <span>  el porque estoy escribiendo esto, no tan solo por tu cumpleaños, si no, por ser la mujer de mi vida y la razon de mi existencia.</span>";
    finalMessage.innerHTML += "<br> <span> Y quizas nunca demuestro lo feliz que soy a tu lado, pero ahora no puedo soportarlo, estoy muy feliz de poder acompañarte este año en este dia tan especial </span>";
    finalMessage.innerHTML += "<br> <span> que de hecho deberia ser un dia festivo internacional, porque la mujer mas bella, tierna, dulce y linda dio su primer respiro </span>";
    finalMessage.innerHTML += "<br> <span> este gran dia. Por ultimo, solo me queda decirte que te amo, y mucho mas de lo que crees. Y creeme que eres la persona mas unica y especial en mi vida,</span>";
    finalMessage.innerHTML += "<br> <span> y siempre te lo hare saber, aun asi no me creas o dudes de mis palabras, porque tu me demostraste que eres alguien maravillosa y deslumbrante</span>";
    finalMessage.innerHTML += "<br> <span> , simplemente alguien esplendida. Quiero darte las gracias tambien por tu existencia y por ser quien eres, y aunque digas tener defectos,</span>";
    finalMessage.innerHTML += "<br> <span> todos esos defectos se van, porque tu los haces especiales. No me arrepiento de ser tu pareja y no me arrepentire nunca de tenerte a mi lado,</span>";
    finalMessage.innerHTML += "<br> <span> porque asi como en este cumpleños y este año la estamos pasando juntos, aun nos falta mucho mas por celebrar y vivir. Asi que amor mio: </span>";
    finalMessage.innerHTML += "<br> <span> ¡Feliz Cumpleaños Mi Princesa! Te amo, y lo hare por siempre. Eres todo para mi. Nunca olvides que te amo. Gracias.  </span>";



    finalMessage.classList.add('active');

  }
  function showEmojis() {
    emojiContainer.style.position = 'fixed';
    emojiContainer.style.left = 0;
    emojiContainer.style.top = 0;
    emojiContainer.style.width = '100%';
    emojiContainer.style.height = '100%';
    emojiContainer.style.pointerEvents = 'none';
    emojiContainer.style.overflow = 'hidden';
    document.body.appendChild(emojiContainer);
    
    const emojis = ['🎉', '✨', '👑', '💖', '🌷', '💐', '🥰', '🎂', '🎈', '💝'];
    for (let i = 0; i < 190; i++) {
      const emoji = document.createElement('span');
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.position = 'absolute';
      emoji.style.left = `calc(${Math.random() * 100}vw - 0.5em)`;
      emoji.style.bottom = '0';
      emoji.style.fontSize = '2rem';
      emoji.style.animation = `floatUp 1.31s ease-out ${Math.random()}s forwards`;
      emojiContainer.appendChild(emoji);

      emoji.addEventListener('animationend', () => {
        emoji.remove();
      });
    }

    setTimeout(() => {
      emojiContainer.remove();
    }, 3000);
  }
});

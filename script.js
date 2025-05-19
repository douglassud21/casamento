// Contagem regressiva
const countdown = () => {
  const countDate = new Date("April 25, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  if (gap <= 0) {
    document.getElementById("countdown-timer").innerHTML =
      "<p>Chegou o grande dia! 🎉</p>";
    clearInterval(interval);
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
};

const interval = setInterval(countdown, 1000);

// Formulário RSVP
const form = document.getElementById("rsvp-form");
const responseMessage = document.getElementById("response-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const presence = document.getElementById("presence").value;

  if (!name || !presence) {
    responseMessage.style.color = "red";
    responseMessage.innerText = "Por favor, preencha todos os campos.";
    return;
  }

  // Aqui você pode enviar esses dados para um servidor, banco de dados ou email
  // Por enquanto, vamos apenas mostrar uma mensagem de agradecimento

  responseMessage.style.color = "#4a6048";
  responseMessage.innerText = `Obrigado, ${name}! Sua confirmação foi recebida.`;

  form.reset();
});

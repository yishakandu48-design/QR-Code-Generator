const button = document.querySelector(`button`);
const code = document.querySelector(`.qr`);
const input = document.querySelector(`input`);
const commandMsg = document.querySelector(`.command`);
button.addEventListener(`click`, function () {
  code.innerHTML = ``;
  if (input.value != ``) {
    commandMsg.classList.add(`hidden`);
    new QRCode(code, {
      text: input.value,
      width: 200,
      height: 200,
    });
  } else {
    commandMsg.classList.remove(`hidden`);
  }
});

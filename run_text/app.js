document.addEventListener('DOMContentLoaded', (event) => {
  const textP = document.querySelector('.js-run__text');
  const text = ' Привет гость :-) ';
  let i = 0;

  function runnerText() {
    if (i < text.length) {
      textP.innerHTML += text.charAt(i); // text[i]
      i++

      if (i === text.length) {
        textP.innerHTML = '';
        i = 0;
      }

      setTimeout(runnerText, 400);
    }
  }

  runnerText();

});


console.log('LOADED');

const random = array => {
  let randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
};

const qwer = ['Q', 'W', 'E', 'R'];
const championsArray = [
  'Aatrox',
  'Ahri',
  'Akali',
  'Akshan',
  'AurelionSol',
  // 'Azir',
  // 'Evelynn',
];

$(document).ready(() => {
  const champ = random(championsArray);
  const spell = random(qwer);

  $('.container').append(
    `<img src="/spell/${champ}${spell}.png" alt=""></img>`
  );

  $('.form').submit(e => {
    e.preventDefault();
    console.log(`${hints[champ]}`);
    const $val = $('.textbox').val();
    if ($val.toLowerCase() === champ.toLowerCase()) {
      //   alert('Correct!');
      $('.response')
        .empty()
        .addClass('correct-text')
        .removeClass('incorrect-text')
        .html(`Correct!`);
      setTimeout(function () {
        $('.textbox').val('');
        location.reload(true);
      }, 2000);
    } else {
      //   alert('Incorrect!');
      $('.response')
        .addClass('incorrect-text')
        .removeClass('correct-text')
        .html(`Incorrect!`);
      $('.textbox').val('');
    }
  });

  console.log(`${hints[champ]}`);

  $('.hint-button').click(() => {
    $('.hint').html(`${hints[champ]}`);
  });
  $('.give-up').click(() => {
    $('.give-up-container').html(`The answer was ${champ}!`);
    setTimeout(function () {
      location.reload(true);
    }, 2000);
  });
});

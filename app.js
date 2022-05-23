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
  'Azir',
  'Brand',
  'Evelynn',
  'Yuumi',
  'Yone',
  'Zyra',
  'Zoe',
  'Ornn',
  'Swain',
  'Skarner',
  'Nunu',
  'Lulu',
  'Lissandra',
  'Lillia',
  'Leblanc',
  'Kled',
  'Kindred',
  'Ivern',
  'Hecarim',
  'Ekko',
  'Ezreal',
  'Fiddlesticks',
  'Fizz',
  'Garen',
  'Gangplank',
  'Gnar',
  'Galio',
  'Graves',
  'Gragas',
  'Gwen',
  'Heimerdinger',
  'Illaoi',
  'Irelia',
  'Jinx',
  'Jhin',
  'Kaisa',
  'Kayle',
  'Khazix',
  'Annie',
  'Bard',
  'Braum',
  'Caitlyn',
  'DrMundo',
  'Cassiopeia',
  'Diana',
  'Camille',
  'LeeSin',
  'Kayn',
  'Lucian',
  'Nami',
  'Qiyana',
  'Pyke',
  'Soraka',
  'Seraphine',
  'Shen',
  'Sejuani',
  'Sion',
  'Sett',
  'Sona',
  'Orianna',
  'Lux',
  'Quinn',
  'Samira',
  'Senna',
  'Ryze',
  'Zac',
  'Zed',
  'Zeri',
  'Ziggs',
  'XinZhao',
  'Warwick',
  'Yorick',
  'Yasuo',
  'Tristana',
  'Sylas',
  'Rumble',
  'Rengar',
  'Rakan',
  'Urgot',
  'Viego',
  'Morgana',
  'Nasus',
];

$(document).ready(() => {
  const champ = random(championsArray);
  const spell = random(qwer);

  $('.container').append(`<img src="done/${champ}${spell}.png" alt=""></img>`);

  $('.form').submit(e => {
    e.preventDefault();
    console.log(`${hints[champ]}`);
    const $val = $('.textbox').val();
    if (
      $val.toLowerCase().replaceAll(' ', '') ===
      champ.toLowerCase().replaceAll(' ', '')
    ) {
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
      $('.response')
        .addClass('incorrect-text')
        .removeClass('correct-text')
        .html(`Incorrect!`);
      $('.textbox').val('');
    }
  });

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

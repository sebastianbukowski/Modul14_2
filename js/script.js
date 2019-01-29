
 var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'Harry, Ron i Hermiona wyruszają odnaleźć horkruksy, dzięki którym Voldemort zapewnił sobie nieśmiertelność. Muszą je wszystkie zniszczyć, by go pokonać. ',
      image: './images/harry_potter.jpg'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Targany niesłusznymi wyrzutami sumienia po śmierci ojca mały lew Simba skazuje się na wygnanie, rezygnując z przynależnego mu miejsca na czele stada.',
      image: './images/krol_lew.jpg'
    },
    {
     id: 3,
     title: 'Mumia',
     desc: 'Komandos marynarki wojennej, Nick Morton, wyrusza z zespołem do Iraku, by odnaleźć ukrywającą         się w bunkrze grupę terrorystów. Na miejscu odkrywa starożytny grobowiec, gdzie czyha ukryte          niebezpieczeństwo.',
     image: './images/mumia.jpg'
      },
      {
     id: 4,
     title: 'Avatar',
     desc: 'Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się        z lokalną społecznością i postanawia jej pomóc. ',
     image: './images/avatar.jpg'
      },
      {
     id: 5,
     title: 'Książę Persji: Piaski czasu',
     desc: 'Dastan, przybrany syn króla Persji, zostaje wrobiony w morderstwo swojego ojca. Wraz z               niepokorną księżniczką Taminą wyrusza w podróż, aby dowieść swojej niewinności.',
     image: './images/ksiaze_persji.jpg'
      }
  ];
  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('div',{className: 'picture_wrapper'},
          React.createElement('img', {src: movie.image}),
          React.createElement('p', {}, movie.desc)
        ));
  });
  var element =
    React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
);


  ReactDOM.render(element, document.getElementById('app')); 

 
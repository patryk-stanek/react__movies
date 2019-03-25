var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        poster: '1.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o lwie',
        poster: '2.jpg'
    },
    {
        id: 3,
        title: 'Pingwiny z Madagaskaru',
        desc: 'Film o pingwinach',
        poster: '3.jpg'
    },
    {
        id: 4,
        title: 'Chłopaki z Ferajny',
        desc: 'Film o chłopakach z ferajny',
        poster: '4.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('img', {src: movie.poster}),
        React.createElement('p', {}, movie.desc)
    );
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));
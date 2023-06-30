const movies = {
  movies: [
    {
      image: './Assets/moviesImages/FastFurious.jpg',
      name: 'Fast & Furious',
      year: 2003,
      type: 'action',
      ocena: 9.0,
      opis: 'Brian O"Conner, policyjny infiltrator, zostaje wysłany do świata nielegalnych wyścigów ulicznych, gdzie poznaje charyzmatycznego kierowcę, Dominica Toretto',
    },
    {
      image: './Assets/moviesImages/krollew_poster.jpg',
      name: 'Król Lew',
      year: 1994,
      type: 'kids',
      ocena: 8.5,
      opis: 'Młody lew Simba wyrusza w podróż, aby odzyskać swoje miejsce jako król sawanny',
    },
    {
      image: './Assets/moviesImages/Obecnosc.jpg',
      name: 'Obecność',
      year: 2013,
      type: 'horror',
      ocena: 7.5,
      opis: 'Rodzina staje w obliczu złowrogiego obecności duchowej w ich nowym domu',
    },
    {
      image: './Assets/moviesImages/zoolander.jpg',
      name: 'Zoolander',
      year: 2001,
      type: 'commedy',
      ocena: 6.5,
      opis: 'Naiwny model Derek Zoolander zostaje wciągnięty w intrygę przeciwko premierowi Malezji',
    },
    {
      image: './Assets/moviesImages/oppenheimer.jpg',
      name: 'Oppenheimer',
      year: 2023,
      type: 'action',
      ocena: 8.5,
      opis: 'Film oparty na życiu J. Roberta Oppenheimera, który jako główny fizyk nadzorował rozwój bomby atomowej i zmagał się z moralnymi dylematami podczas II wojny światowej',
    },
    {
      image: './Assets/moviesImages/indiana_jones.jpg',
      name: 'Indiana Jones i Ostatnia Krucjata',
      year: 1989,
      type: 'adventure',
      ocena: 8.2,
      opis: 'Indiana Jones szuka świętego Graala i musi stawić czoła swoim największym wyzwaniom',
    },
    {
      image: './Assets/moviesImages/nemo_poster.jpg',
      name: 'Gdzie jest Nemo?',
      year: 2003,
      type: 'kids',
      ocena: 8.1,
      opis: 'Zagubiona mała ryba Nemo musi zostać uratowana przez swojego ojca z akwarium dentystycznego',
    },
    {
      image: './Assets/moviesImages/It.jpg',
      name: 'It',
      year: 2017,
      type: 'horror',
      ocena: 7.3,
      opis: 'Grupa dzieci musi stawić czoła strasznemu klaunowi, który terroryzuje ich małe miasteczko',
    },
    {
      image: './Assets/moviesImages/avatar_poster.jpg',
      name: 'Avatar',
      year: 2009,
      type: 'adventure',
      ocena: 7.8,
      opis: 'Jake Sully odkrywa tajemnice tej egzotycznej planety i staje się częścią konfliktu pomiędzy ludźmi, a mieszkańcami Pandory.',
    },
    {
      image: './Assets/moviesImages/Sasiedzi.jpg',
      name: 'Sąsiedzi',
      year: 2014,
      type: 'commedy',
      ocena: 6.3,
      opis: 'Młode małżeństwo walczy z grupą hałaśliwych studentów, którzy wprowadzają się do domu obok',
    },
    {
      image: './Assets/moviesImages/wick_poster.jpg',
      name: 'John Wick',
      year: 2014,
      type: 'action',
      ocena: 7.4,
      opis: 'Były płatny morderca John Wick wraca do świata przestępczości, aby pomścić śmierć swojego psa',
    },
    {
      image: './Assets/moviesImages/interstellar.jpg',
      name: 'Interstellar',
      year: 2014,
      type: 'adventure',
      ocena: 8.6,
      opis: 'Grupa astronautów wyrusza w kosmiczną podróż, aby znaleźć nowy dom dla ludzkości w odległej galaktyce',
    },
    {
      image: './Assets/moviesImages/zakladnik_poster.jpg',
      name: 'Zakładnik z Wall Street',
      year: 2013,
      type: 'commedy',
      ocena: 8.2,
      opis: 'Młody makler zostaje uwikłany w świat korupcji na Wall Street, prowadząc do szalonej i zabawnej przygody',
    },
    {
      image: './Assets/moviesImages/moana_poster.jpg',
      name: 'Moana',
      year: 2016,
      type: 'kids',
      ocena: 7.6,
      opis: 'Młoda wojowniczka wyrusza w niezapomnianą podróż, aby uratować swoje ludzi i odkryć swoje prawdziwe przeznaczenie',
    },
    {
      image: './Assets/moviesImages/Hereditary.jpg',
      name: 'Hereditary',
      year: 2018,
      type: 'horror',
      ocena: 7.3,
      opis: 'Rodzina odkrywa tajemnice swojego dziedzictwa, gdy nękają ich przerażające siły nadprzyrodzone',
    },
  ],
};
// horror, commedy, kids, action, adventure

let genre = wszystkie;

const showMoviesFunction = () => {
  const moviesContainer = document.getElementById('movies-container');

  movies.movies.forEach((movie) => {
    const movieDiv = document.createElement('div');
    movieDiv.innerHTML = `
	<div class='card'>
	<h3>${movie.name}</h3>
	<img src=${movie.image} alt='${movie.name}'/>
	<div class='two-in-row'>
	<h4>Rok: ${movie.year}</h4>
	<h4>Ocena: ${movie.ocena}</h4>
	</div>
	<p>${movie.opis}</p>
	</div>
  `;
    moviesContainer.appendChild(movieDiv);
  });
};

showMoviesFunction();

const segregateFunction = (genre) => {
  const moviesContainer = document.getElementById('movies-container');

  moviesContainer.innerHTML = '';

  if (genre === 'wszystkie') {
    movies.movies.forEach((movie) => {
      const movieDiv = document.createElement('div');
      movieDiv.innerHTML = `
		<div class='card'>
		<h3>${movie.name}</h3>
		<img src=${movie.image} alt='${movie.name}'/>
		<div class='two-in-row'>
		<h4>Rok: ${movie.year}</h4>
		<h4>Ocena: ${movie.ocena}</h4>
		</div>
		<p> ${movie.opis}</p>
		</div>
	  `;
      moviesContainer.appendChild(movieDiv);
    });
  } else {
    const filteredMovies = movies.movies.filter((item) => item.type === genre);

    filteredMovies.forEach((item) => {
      const movieDiv = document.createElement('div');
      movieDiv.innerHTML = `
      <div class='card'>
        <h3>${item.name}</h3>
		<img src=${item.image} alt='${item.name}'/>
        <div class='two-in-row'>
          <h4>Rok: ${item.year}</h4>
          <h4>Ocena: ${item.ocena}</h4>
        </div>
        <p> ${item.opis}</p>
      </div>
    `;
      moviesContainer.appendChild(movieDiv);
    });
  }
};

horror.addEventListener('click', function () {
  segregateFunction('horror');
});

action.addEventListener('click', function () {
  segregateFunction('action');
});

adventure.addEventListener('click', function () {
  segregateFunction('adventure');
});

commedy.addEventListener('click', function () {
  segregateFunction('commedy');
});

kids.addEventListener('click', function () {
  segregateFunction('kids');
});

wszystkie.addEventListener('click', function () {
  segregateFunction('wszystkie');
});

(function() {
    window.location.replace('https://jomardiago.github.io/josemaridiago/'); // redirecting to new page
    /* const weather = new Weather();

    $('#chucks-modal').on('show.bs.modal', function (e) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog bounceIn animated');
    });

    $('#chucks-modal').on('hide.bs.modal', function (e) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog flipOutX animated');
    });

    function getRandomChuckNorrisJoke(callback) {
        fetch('https://api.icndb.com/jokes/random').then(response => response.json())
        .then(jokeData => {
            let jokeHtmlElement;
            let jokeContainer;

            if (jokeData.type === 'success') {
                jokeHtmlElement = `<p class="lead text-center chuck-norris-joke">"${jokeData.value.joke}"</p>`;
                jokeContainer = document.querySelector('#cn-joke-container');
            } else {
                jokeHtmlElement = `<p class="lead text-center chuck-norris-joke">"Whoops! I think something is wrong is with Chuck's API Database. Maybe he broke it I don't know. Maybe next time?"</p>`;
                jokeContainer = document.querySelector('#cn-joke-container');
                document.querySelector('.another-one').remove();
            }
            jokeContainer.innerHTML = jokeHtmlElement;

            callback();
        });
    };

    getRandomChuckNorrisJoke(() => $('#chucks-modal').modal('show'));
    document.querySelector('.another-one').addEventListener('click', () => { 
        getRandomChuckNorrisJoke(() => $('#chucks-modal').modal('show'));
    });

    weather.getWeather().then(weatherData => {
        document.querySelector('#w-location').textContent = weatherData.display_location.full;
        document.querySelector('#w-desc').textContent = weatherData.weather;
        document.querySelector('#w-string').textContent = weatherData.temperature_string;
        document.querySelector('#w-icon').setAttribute('src', weatherData.icon_url);
        document.querySelector('#w-humidity').textContent = `Relative Humidity: ${weatherData.relative_humidity}`;
        document.querySelector('#w-dewpoint').textContent = `Feels Like: ${weatherData.feelslike_string}`;
        document.querySelector('#w-feels-like').textContent = `Dew Point: ${weatherData.dewpoint_string}`;
        document.querySelector('#w-wind').textContent= `Wind: ${weatherData.wind_string}`;
    }).catch(err => {
        console.log(err);
        document.querySelector('.weather-forecast').remove();
        
    }); */
})();
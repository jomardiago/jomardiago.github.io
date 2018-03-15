(function() {
    function generateAnotherJoke() {
        document.querySelector('.chuck-norris-joke').remove();
        getRandomChuckNorrisJoke();
    };

    function getRandomChuckNorrisJoke() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://api.icndb.com/jokes/random', true);
        xhr.onload = function() {
            if (this.status === 200) {
                const jokeData = JSON.parse(this.responseText);
                const jokeHtmlElement = `<p class="lead text-center chuck-norris-joke">"${jokeData.value.joke}"</p>`;
                const jokeContainer = document.querySelector('#cn-joke-container');
                jokeContainer.innerHTML = jokeHtmlElement;

                setTimeout(() => {
                    $('#chucks-modal').modal('show');
                }, 1000);
            }
        };
        xhr.send();
    };

    getRandomChuckNorrisJoke();
    document.querySelector('.another-one').addEventListener('click', getRandomChuckNorrisJoke);
})();
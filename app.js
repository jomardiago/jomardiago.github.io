(function() {
    function generateAnotherJoke() {
        document.querySelector('.chuck-norris-joke').remove();
        getRandomChuckNorrisJoke();
    };

    function getRandomChuckNorrisJoke() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.icndb.com/jokes/random', true);
        xhr.onload = function() {
            if (this.status === 200) {
                const jokeData = JSON.parse(this.responseText);
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

                $('#chucks-modal').on('show.bs.modal', function (e) {
                    $('.modal .modal-dialog').attr('class', 'modal-dialog bounceIn animated');
                });

                $('#chucks-modal').on('hide.bs.modal', function (e) {
                    $('.modal .modal-dialog').attr('class', 'modal-dialog flipOutX animated');
                })

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
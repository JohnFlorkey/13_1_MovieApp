let movies = [];
let id = 0;

class Movie {
    constructor (title, rating) {
        this.title = title;
        this.rating = rating;
        this.id = null;
    }
    validateRating() {
        if(this.rating >= 0 && this.rating <= 10) {
            return true;
        }
        alert('Movie rating must be a number between 0 and 10');
        return false;
    }
    validateTitle() {
        if(this.title.length > 1) {
            return true;
        }
        alert('Movie title must be at least two characters');
        return false;
    }
}

$('#addMovie').on('click', function(event) {
    event.preventDefault();
    const title = $('#movieTitle').val();
    const rating = $('#movieRating').val();
    const movies = addMovie(title, rating);
    updateDOM(movies);
    $('input').val('');
})

$('#sortTitle').on('click', () => {
    sortMoviesTitle(movies);
    updateDOM(movies);
    })

$('#sortRating').on('click', () => {
    sortMoviesRating(movies);
    updateDOM(movies);
    })

$('#movies').on('click', '.remove', function(){
    movies.splice(movies.findIndex((movie => movie.id === $(this).parent().attr('id'))), 1);
    updateDOM(movies);
})

function addMovie(title, rating) {
    const movie = new Movie(title, rating);
    if(!movie.validateRating()) {
        return;
    }
    if(!movie.validateTitle()) {
        return;
    }
    movie.id = `movie${id}`;
    id += 1;
    movies.push(movie);
    return movies;
}

function updateDOM(movies) {
    if(!movies) {
        return;
    }
    $('#movies').html('');
    movies.forEach(movie => {
        $('<div>')
            .text(`${movie.title} rates a ${movie.rating} `)
            .attr('id', movie.id)
            .append($('<button>').text('Remove').addClass('remove'))
            .appendTo('#movies');
    });
}

function sortMoviesTitle(movies) {
    return movies.sort((a,b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if(titleA < titleB){
            return -1;
        }
        if(titleA > titleB){
            return 1;
        }
        return 0;
    });
}

function sortMoviesRating(movies) {
    return movies.sort((a, b) => a.rating - b.rating)
}
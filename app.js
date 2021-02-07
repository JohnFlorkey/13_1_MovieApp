$('#addMovie').on('click', function(event) {
    event.preventDefault();
    const title = $('#movieTitle').val();
    const rating = $('#movieRating').val();
    addMovie(title, rating);
})

$('#movies').on('click', '.remove', function(){
    $(this).parent().remove();
})

function validateRating(rating) {
    if(rating >= 0 && rating <= 10) {
        return true;
    }
    alert('Movie rating must be a number between 0 and 10');
    return false;
}

function validateTitle(title) {
    if(title.length > 1) {
        return true;
    }
    alert('Movie title must be at least two characters');
    return false;
}

function addMovie(title, rating) {
    if(!validateRating(rating)) {
        return;
    };
    if(!validateTitle(title)) {
        return;
    };
    $('<div>')
        .text(`${title} rates a ${rating} `)
        .append($('<button>').text('Remove').addClass('remove'))
        .appendTo('#movies');
} 
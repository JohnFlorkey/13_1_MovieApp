$('#addMovie').on('click', function() {
    const title = $('#movieTitle').val();
    const rating = $('#movieRating').val();
    addMovie(title, rating);
})

$('#movies').on('click', '.remove', function(){
    $(this).parent().remove();
})

function addMovie(title, rating) {
    // $(`<div> ${title} rates a ${rating} <button>Remove</button></div>`).appendTo($('#movies'));
    $('<div>')
        .text(`${title} rates a ${rating} `)
        .append($('<button>').text('Remove').addClass('remove'))
        .appendTo('#movies');
} 
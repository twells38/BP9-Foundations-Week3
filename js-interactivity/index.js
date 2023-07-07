let message = document.querySelector('#message')
//create function addMovie
function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('.input')
    let movie = document.createElement('li') // this will be the parent element of our movie’s title and the movie’s delete button.
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value //grab value from inutField
    //add an event handler for every movie title
    movieTitle.addEventListener('click',crossOffMovie)
    movie.appendChild(movieTitle)
    //create a delete button and save it to a variable
    let deleteBtn = document.createElement('button')
    movie.appendChild(deleteBtn)
    //add an event hadler when click to delete each movie
    deleteBtn.addEventListener('click',deleteMovie)
    deleteBtn.textContent = "x"
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}
//create function deleteMovie
function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}
//create function crossOfMovie toggle the checked class on any movie title.
function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains('checked')=== true) {
        message.textContent = 'Movie watched'
    } else {
        message.textContent = 'Movie added backed'
    }
}
//add in some functionalliy that will display message to users to let them know what action took place



document.querySelector('form').addEventListener('submit', addMovie)
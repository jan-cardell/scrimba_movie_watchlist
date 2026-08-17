const exploringDiv = document.getElementById('exploring')
const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')




searchBtn.addEventListener('click', getMovies)

function getMovies() {
    fetch (`http://www.omdbapi.com/?i=tt3896198&apikey=32c2d752&t=${searchInput.value}`)
        .then(res => res.json())
        .then(data => {
            exploringDiv.innerHTML = 
            `
            <img src='${data.Poster}'>
            <p>${data.Title}</p>
            <p>${data.Ratings[0].Value}
            <p>${data.Runtime}</p>
            <p>${data.Genre}</p>
            <p>${data.Plot}</p>
            `
            }
        )
}
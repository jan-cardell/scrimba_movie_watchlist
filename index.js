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
            <div id='movie-item'>
                <img id='movie-poster' src='${data.Poster}'>
                <div id='movie-body'>
                    <div id='movie-head'>
                        <h2>${data.Title}</h2>
                        <i class="fa-solid fa-star"></i>
                        <p>${data.Ratings[0].Value}</p>
                    </div>
                    <div id='movie-subhead'>
                        <p>${data.Runtime}</p>
                        <p>${data.Genre}</p>
                        <i class="fa-solid fa-circle-plus"></i>
                        <button>Watchlist</button>
                    </div>
                    <p id='movie-plot'>${data.Plot}</p>
                </div>
            </div>
            `
            }
        )
}
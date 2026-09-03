const exploringDiv = document.getElementById('exploring')
const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
let watchlist = JSON.parse( localStorage.getItem("watchlist") )

searchBtn.addEventListener('click', getMovies)

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        fetch (`http://www.omdbapi.com/?apikey=32c2d752&i=${e.target.dataset.add}`)
            .then(res => res.json())
            .then(data => {
                watchlist[e.target.dataset.add] = {body: `
                    <div id='movie-item'>
                        <img id='movie-poster' src='${data.Poster}'>
                        <div id='movie-body'>
                            <div id='movie-head'>
                                <h2>${data.Title}</h2>
                                <i class="fa-solid fa-star"></i>
                                <p>${data.Ratings[0].Value}</p>
                            </div>
                            <div id='movie-subhead'>
                                <p id='movie-runtime'>${data.Runtime}</p>
                                <p id='movie-genre'>${data.Genre}</p>
                                <div id='add-watchlist-btn' data-remove='${data.imdbID}'>
                                    <i id='add-plus' class="fa-solid fa-circle-minus" data-remove='${data.imdbID}'></i>
                                    <p data-remove='${data.imdbID}'>Remove</p>
                                </div>
                            </div>
                            <p id='movie-plot'>${data.Plot}</p>
                        </div>
                    </div>
                    `}
                renderLocalStorage()
            })
    }
})

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click()
    }
})

function getMovies() {
    fetch (`http://www.omdbapi.com/?apikey=32c2d752&t=${searchInput.value}`)
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
                        <p id='movie-runtime'>${data.Runtime}</p>
                        <p id='movie-genre'>${data.Genre}</p>
                        <div id='add-watchlist-btn' data-add='${data.imdbID}'>
                            <i id='add-plus' class="fa-solid fa-circle-plus" data-add='${data.imdbID}'></i>
                            <p data-add='${data.imdbID}'>Watchlist</p>
                        </div>
                    </div>
                    <p id='movie-plot'>${data.Plot}</p>
                </div>
            </div>
            `
            }
        )
}

function renderLocalStorage(){
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
}

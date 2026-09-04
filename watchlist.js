const watchlistDiv = document.getElementById('watchlist')
const moviesFromLocalStorage = JSON.parse(localStorage.getItem('watchlist')) || {}

document.addEventListener('click', function(e){
    if(e.target.dataset.remove){
        delete moviesFromLocalStorage[e.target.dataset.remove]
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
        renderWatchlist()
        checkForEmpty()
    }
})

function renderWatchlist() {
    let watchlistHtml = ''
    for (const imdbID in moviesFromLocalStorage) {
        watchlistHtml += moviesFromLocalStorage[imdbID].body
    }
    watchlistDiv.innerHTML = watchlistHtml
}

function checkForEmpty() {
    if (Object.keys(moviesFromLocalStorage).length === 0){
    watchlistDiv.innerHTML=
    `            <p>Your watchlist is looking a little empty...</p>
    <a id="add-movies" href="index.html">
        <i class="fa-solid fa-circle-plus"></i>
        <p>Let's add some movies!</p>
    </a>`
}}

renderWatchlist()
checkForEmpty()


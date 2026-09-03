const watchlistDiv = document.getElementById('watchlist')
const moviesFromLocalStorage = JSON.parse( localStorage.getItem("watchlist") )
 

function renderWatchlist() {
    console.log(moviesFromLocalStorage)
    let watchlistHtml = ''
    for (const imdbID in moviesFromLocalStorage) {
        watchlistHtml += moviesFromLocalStorage[imdbID].body
    }
    watchlistDiv.innerHTML = watchlistHtml
}

renderWatchlist()


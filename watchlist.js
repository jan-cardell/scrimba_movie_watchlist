const watchlistDiv = document.getElementById('watchlist')
const moviesFromLocalStorage = JSON.parse( localStorage.getItem("watchlist") )
 

function renderWatchlist() {
    let watchlistHtml = ''
    for (const imdbID in moviesFromLocalStorage) {
        watchlistHtml += moviesFromLocalStorage[imdbID].body
    }
    console.log(watchlistHtml)
    watchlistDiv.innerHTML = watchlistHtml
}

renderWatchlist()


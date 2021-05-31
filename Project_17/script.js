const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=228fa30ced316a114e0933e36201acaa&language=en-US&sort_by=popularity.desc'
const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=228fa30ced316a114e0933e36201acaa&page=1&query="'
const IMG_PATH ='https://image.tmdb.org/t/p/w300'

const form = document.querySelector('#form')
const search = document.querySelector('#search')
const mainContainer = document.querySelector('#main')

// Get initial movies
getMovies(API_URL)

// Search movies
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchTerm = search.value;
    getMovies(API_SEARCH + searchTerm)
})




// API calls
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)

    showMovies(data.results); 
}

function showMovies(movies) {
    mainContainer.innerHTML = ''; //Clear the main first

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview} = movie

        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie')
        let voteClass = '';

        if (vote_average <= 3.5) {
            voteClass = 'red'
        } else if (3.5 > vote_average <= 5.6) {
            voteClass = 'orange'
        }  else if (5.6 > vote_average <= 7.5) {
            voteClass = 'yellow'
        } else if (vote_average >7.5) {
            voteClass = 'green'
        } else {
            voteClass = ''
        }

        movieDiv.innerHTML = `
        <div class="movie-poster">
            <img src="${IMG_PATH+poster_path}" alt="movie poster"></img>
        </div>

        <div class="movie-info">
            <div class="movie-title">${title}</div>
            <div class="movie-rating ${voteClass}">${vote_average}</div>
        </div>
        
        <div class="movie-text">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div>
        `


        movieDiv.addEventListener('mouseover', () => {
            movieDiv.classList.add('show')
            movieDiv.classList.add('show')
    
        })
        movieDiv.addEventListener('mouseleave', () => {
            movieDiv.classList.remove('show')
        })
        mainContainer.appendChild(movieDiv)
       
    })
}
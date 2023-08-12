
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjlmNGQ1YjZjMDEyMGFhOGY0YzBkZmI5NTgxMGY2NCIsInN1YiI6IjY0OTA0MTA0MmY4ZDA5MDEzYWZiMTdkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U7mb-Yl2De-gY5JLXC10Xq_S0elSzE4nwezUezO0GAQ'
    }
  };
  
function fetchMovies() {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-U&api_key=fb9f4d5b6c0120aa8f4c0dfb95810f64&page1', options)
        .then(res => res.json())
      
        .then(res => {
            const movies = res.results;

            // Create a container to hold the movie boxes
            const movieContainer = document.getElementById('movieContainer');

            // Loop through the movies and create movie boxes
            movies.map(data => {
                const box = document.createElement('div');
                box.className = 'box';

                const movieHTML = `
                <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title} Poster">
                    <div class="moviesDetails">
                        <div class="leftDetails">
                            <h5>${data.title}</h5>
                            <p>Release Date: ${data.released_date}</p>
                            <p>Rating: ${data.popularity}</p>
                        </div>
                        <div class="rightDetails">
                            <!-- Add additional details if needed -->
                        </div>
                        <div class="playButton">
                            <i class='bx bx-play'></i>
                        </div>
                    </div>
                `;

                box.innerHTML = movieHTML;
                movieContainer.appendChild(box);
            });
        })
        .catch(err => console.error(err));
}

fetchMovies();

 const Search = document.getElementById('search')
 const Form = document.getElementById('form')

Form.addEventListener("submit", (e) =>{
    e.preventDefault()
         movieContainer.innerHTML=''
    const searchItem = Search.value
    if (searchItem) { 
        fetchMovies('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&api_key=fb9f4d5b6c0120aa8f4c0dfb95810f64&query="&page=1'+ searchItem);
        Search.value=""
    }

})

// Call the fetchMovies function to load movie data
fetchMovies();
let input = document.querySelector('input');
let rootElm = document.querySelector('ul');

let allMovies = [
];

input.addEventListener('keyup', (event) => {
  if(event.key === 'Enter'){
    let movie = {
      name: event.target.value,
      watched: false,
    };
    allMovies.push(movie);
    event.target.value = '';
  }
  createUI(allMovies, rootElm);
})

function handleClick(event){
  let idx = event.target.idx;
  allMovies[idx].watched = !allMovies[idx].watched;
  createUI(allMovies, rootElm);
}

let elm = React.createElement;

function createUI(movies, root){
  let movieList = movies.map((movie, idx) => {
    let li = elm("li", {
      className: "movie-list-item"
    }, elm("span", {}, movie.name), elm("button", {
      className: "btn",
      idx: idx,
      onClick: handleClick
    }, movie.watched ? "Watched" : "To Watch"));
    return li;
  })
  ReactDOM.render(movieList, root);
}

createUI(allMovies, rootElm);
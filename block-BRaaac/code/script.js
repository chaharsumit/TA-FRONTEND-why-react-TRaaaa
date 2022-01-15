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

function elm(type, attr = {}, ...children){
  let element = document.createElement(type);
  for(let key in attr){
    if(key.startsWith('data-')){
      element.setAttribute(key,attr[key]);
    }else{
      element[key] = attr[key];
    }
  }
  children.forEach(child => {
    if(typeof child === "object"){
      element.append(child);
    }
    if(typeof child === "string"){
      let node = document.createTextNode(child);
      element.append(node);
    }
  })
  return element;
}

function createUI(movies, root){
  rootElm.innerHTML = '';
  movies.forEach((movie, idx) => {
    let li = elm("li", {
      className: "movie-list-item"
    }, elm("span", {}, movie.name), elm("button", {
      className: "btn",
      idx: idx,
      onclick: handleClick
    }, movie.watched ? "Watched" : "To Watch"));
    /*
    let li = document.createElement('li');
    li.classList.add('movie-list-item');
    let span = document.createElement('span');
    span.innerText = movie.name;
    let button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = movie.watched ? "Watched" : "To Watch";
    button.idx = idx;
    */
    console.log(li);
    root.append(li);
  })
}

createUI(allMovies, rootElm);
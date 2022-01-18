let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];

function App(){
  return (
    <>
    <Buttons />
    </>
  )
}

/*

function handleClick_first(){
  alert('Hello React Event');
}

function handleClick_second(){
  alert('To learn React use https://reactjs.org');
  alert('React and ReactDOM works together');
  alert('Babel helps in writing JSX');
}

function Button(){
  return (
    <>
      <button onClick={handleClick_first}>Click Me!</button>
      <button onClick={handleClick_second}>How can I help you?</button>
    </>
  );
}

*/

/*

function handleClick_third(event){
  let name = event.target.innerText;
  alert('Hello ' + name);
}

function ThreeBtn(){
  return (
    <>
      <button onClick={(event) => handleClick_third(event)}>Arya</button>
      <button onClick={(event) => handleClick_third(event)}>John</button>
      <button onClick={(event) => handleClick_third(event)}>Bran</button>
    </>
  )
}

*/

function handleFruits(event, value){
  alert('You chose' + ' ' + value);
}

function Buttons(){
  return (
    <>
      {fruits.map(fruit => <Fruit key={fruit.id} {...fruit} />)}
    </>
  );
}

function Fruit(props){
  return (
    <>
      <button onClick={(event) => handleFruits(event, props.value)}>{props.value}</button>
    </>
  )
}


export default App;
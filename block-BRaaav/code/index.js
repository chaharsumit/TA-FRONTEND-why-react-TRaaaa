let div = React.createElement('div', {id: "root", className: 'imdiv'}, "hello div");
console.log(div.type);
console.log(div.props);
console.log(div.props.children);
console.log(div);

ReactDOM.render(div, document.querySelector('body'));

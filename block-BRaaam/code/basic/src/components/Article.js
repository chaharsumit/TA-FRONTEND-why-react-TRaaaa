function Articles(){
  return (<>
      <Article title="This is First Article"/>
      <Article title="This is Second Article"/>
      <Article title="This is Third Article"/>
    </>
  );
}

export default Articles;

export function Article(props){
  return (<>
    <img src="/images/books.jpeg" width="300" height="300"/>
    <h3>{props.title}</h3>
  </>);
}
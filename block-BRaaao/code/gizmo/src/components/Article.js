import data from '../data'

function Article(){
  return (
    <section className="article-section">
      <div className="container">
        <h2>Articles</h2>
        <div className="article-cards-container">
          {
            data.map(article => 
              <Card {...article}/>
            )
          }
        </div>
      </div>
    </section>
  )
}

function Card(props){
  return (
    <article className="article-card">
      <div className="article-image-container">
        <img src={props.urlToImage} />
      </div>
      <a className="article-title">{props.title}</a>
    </article>
  );
}

export default Article;


/*
<article className="article-card">
  <div className="article-image-container">
    <img src="https://s3.cointelegraph.com/storage/uploads/view/d48310014a898546a95b35ed741b8eac.jpg" />
  </div>
  <a className="article-title">Article Title</a>
</article>
*/
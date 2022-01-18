import data from '../data';
import PropTypes from 'prop-types';

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

Card.propTypes = {
  urlToImage: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
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
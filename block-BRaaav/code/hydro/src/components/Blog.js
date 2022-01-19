let BlogDetails = [
  {
    id: 'blog-1',
    date: 'December 22, 2017',
    title: 'How To Find Beautiful Workspace?',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    btnText: 'Read Article',
    imageUrl: '/media/blog-image1.jpg'
  },
  {
    id: 'blog-2',
    date: 'December 18, 2017',
    title: 'Woman Sportwear',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    btnText: 'Read More',
    imageUrl: '/media/blog-image2.jpg' 
  },
  {
    id: 'blog-3',
    date: 'December 14, 2017',
    title: 'New Creative Fashion',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    btnText: 'Read Article',
    imageUrl: '/media/blog-image3.jpg' 
  },
  {
    id: 'blog-4',
    date: 'December 10, 2017',
    title: 'Minimalist Design Trend In 2018',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    btnText: 'View Detail',
    imageUrl: '/media/blog-image4.jpg' 
  }
]

function Blog(){
  return (
    <section className="blog padding">
        <div className="container">
          <header className="sec-header text-center">
            <h2 className="heading">Our Blog</h2>
            <div className="dot-wrapper">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </header>
          <div className="flex wrap">
            {
              BlogDetails.map(detail => <Blogpost key={detail.id} {...detail} />)
            }
          </div>
        </div>
      </section>
  );
}

function Blogpost(props){
  return (
    <article className="flex article flex-48">
      <div className="flex-40 font-0">
        <img
          className="flexible-img"
          src={props.imageUrl}
          alt="Blog image 1"
        />
      </div>

      <div className="flex-60 article-content">
        <time datetime="">
          <i className="far fa-clock"></i>
          {props.date}
        </time>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a className="btn btn-tertiary" href="#">{props.btnText}</a>
      </div>
    </article>
  );
}

export default Blog;
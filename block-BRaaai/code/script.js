let months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
let cardInfo = {
  title: 'City Lights in New York',
  date: new Date('2017-01-26'),
  comments: 67,
  subTitle: 'The city that never sleeps.',
  description:
    'New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.',
  category: 'photos',
  imageURL:
    'https://images.unsplash.com/photo-1610874933184-7728fd666162?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
};
let root = document.querySelector('section');

let ui = (
  <article className="card flex">
    <div className="image-container">
      <img src={cardInfo.imageURL} alt="Image" />
      <div className="circle-parent">
        <div className="circle flex">{cardInfo.date.getDate()}<br />{months[cardInfo.date.getMonth()]}</div>
      </div>
      <div className="rectangle">{cardInfo.category}</div>
    </div>
    <h1>{cardInfo.title}</h1>
    <h4>{cardInfo.subTitle}</h4>
    <p>{cardInfo.description}</p>
    <span><i className="fas fa-comments"></i> {cardInfo.comments} comments</span>
  </article>
);

ReactDOM.render(ui, root);

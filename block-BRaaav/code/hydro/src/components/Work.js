let images = [
  {id: 'img1', imageUrl: "/media/work-image1.jpg"},
  {id: 'img2', imageUrl: "/media/work-image2.jpg"},
  {id: 'img3', imageUrl: "/media/work-image3.jpg"},
  {id: 'img4', imageUrl: "/media/work-image4.jpg"}
];

function Work(){
  return (
    <section className="work padding">
      <div className="container">
        <header className="sec-header text-center">
          <h2 className="heading">Our Work</h2>
          <div className="dot-wrapper">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </header>
        <div className="flex">
          { 
            images.map(image => <Card key={image.id} {...image} /> )
          }
        </div>
      </div>
    </section>
  )
}

function Card(props){
  return (
    <div className="flex-23">
      <img
        className="flexible-img"
        src={props.imageUrl}
        alt="Work Image 1"
      />
    </div>
  );
}

export default Work;
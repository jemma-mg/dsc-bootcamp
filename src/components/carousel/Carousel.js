import "./Carousel.css";

function Carousel(props) {
  return (
    <>
      <div className={props.class__name}>
        <img alt="CalosalImg" src= {props.carosal__img} />
        <div className="carosal__text">
            <h1>{props.title}</h1> 
            <p>{props.text}</p>
            <a href={props.url} className= {props.btnClass}> {props.btnText}
            </a>
        </div>
      </div>
    </>
  );
}

export default Carousel;
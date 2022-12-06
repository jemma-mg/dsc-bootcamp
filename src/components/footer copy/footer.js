import "./footer.css"

const footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          <a href="#" className="fa-brands fa-facebook-square"></a>
          <a href="#" className="fa-brands fa-instagram-square"></a>
          <a href="#" className="fa-brands fa-behance-square"></a>
          <a href="#" className="fa-brands fa-twitter-square"></a>
        </div>
      </div>
    </div>
  )
}

export default footer
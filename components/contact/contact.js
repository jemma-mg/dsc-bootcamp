import "./contact.css"

function contact(){
    return(
        <div className="form__container">
            <h1>Send a message to ss</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default contact
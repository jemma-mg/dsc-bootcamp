import { Component } from "react";
import "./destination.css"

class DestinationData extends Component{
    render(){
        return(
            <div className={ this.props.className }>
            <div className='desc__text'>
                <h2>{ this.props.heading }</h2>
                <p>{ this.props.text }</p>
            </div>
            <div className='desc__image'>
                <img alt='img1' src={ this.props.img1 }></img>
                <img alt='img2' src={ this.props.img2 }></img>
            </div>
            </div>
        )
    }
}

export default DestinationData
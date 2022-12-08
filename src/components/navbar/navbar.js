import "./navbar.css";
import { Component } from "react";
import { MenuItems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  // Click Function
  handleClick = ()=>{
    this.setState({clicked: !this.state.clicked})
  }
  // NavBar
  render() {
    return (
      <nav className="nav__items">
        <h1 className="navbar__logo">Trip Easy</h1>
        <div className="menu__icons" onClick={this.handleClick}>
          <i className={ this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? ".nav__menu active" : ".nav__menu"}>
          { MenuItems.map((item,index)=>{
            return(
              <div className=" nav__links">
              <li key={index}>
                <Link className={item.class__name} to={item.url}>
                  <i class={item.icon}></i>{item.title}
                </Link>
              </li>
              </div>
            )
          }) }
        </ul>
      </nav>
    );
  }
}

export default Navbar;
import React, {Component, Fragment} from 'react';
import Logo from '../images/logo.png'

class Header extends Component {
    render () {
      return (
        <header>
            <div class="container">
                <div className="topHeader">
                <a href="#" className="logo"><img src={Logo} /></a>
                <nav>
                    <ul>
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services <i className="arrow down"></i></a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
      )
    }
  }

  export default Header;
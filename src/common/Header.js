import React, {Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="header bg-white shadow-sm rounded">
        <div className="row align-items-center">
          <div className="col-md-auto">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>
          <div className="col justify-content-end">
            <nav className="nav">
              <Link to={`/`}>
                <span className="nav-link active">Home</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

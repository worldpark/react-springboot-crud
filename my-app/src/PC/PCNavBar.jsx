import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link as RouterLink } from 'react-router-dom';



class PCNavBar extends Component {


  render() {
    return (
      <div>
        <AppBar>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark nav-fixed-top">
          <div className="container-fluid">
            <RouterLink className="navbar-brand" to="/">Home</RouterLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <RouterLink className="nav-link" to="/board" activeClassName="active">Board</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </AppBar>
      </div>
    );
  }
}

export default PCNavBar;
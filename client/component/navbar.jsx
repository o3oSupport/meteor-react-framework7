import React from 'react';
import {Default,Main} from './navbar/app';

const NavBar = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData() {
    return {
      navbar: Session.get('navbar')
    }
  },  
  navbar() {
    if(this.data.navbar == 'main') {
      return <Main/>
    }
    else {
      return <Default/>
    }
  },
  render() {
    const navbar = this.data.navbar;
    return (
      <div className="navbar">
        <Default/>
      </div>
    );
  }
});

export default NavBar;

import React from 'react';

const NavBar = React.createClass({
  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          {/* sliding */}
          <div className="center sliding">
            Awesome App
          </div>
          <div className="right">
              <a href="#" className="link icon-only open-panel">
                <i className="icon icon-bars" />
              </a>
            </div>
          </div>
      </div>
    );
  }
});


export default NavBar;

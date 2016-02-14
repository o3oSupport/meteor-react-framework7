import React from 'react';

const Main = React.createClass({
  render() {
    const title = this.data.title;
    return (
      <div className="navbar-inner">
        {/* sliding */}
        <div className="left sliding">
          <a href="#" className="back link">
            <i className="icon icon-back">
            </i>
          </a>
        </div>
        <div className="center sliding">
          app-
        </div>
        <div className="right">
          <a href="#" className="link icon-only open-panel">
            <i className="icon icon-bars" />
          </a>
        </div>
      </div>
    );
  }
});

export default Main;

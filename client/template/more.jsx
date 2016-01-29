import React from 'react';

let More = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    }
  },
  render() {
    return (
      <div className="pages navbar-through toolbar-through">
        <div className="page">
          <div className="page-content">
            <h1>More</h1>
            <p><a href="/">Back home</a></p>
          </div>
        </div>
      </div>
    )
  }
});

export default More;

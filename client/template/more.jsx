import React from 'react';

const More = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    }
  },
  render() {
    return (
      <div>
        <h1>More</h1>
        <p><a href="/">Back home</a></p>
      </div>
    )
  }
});

export default More;

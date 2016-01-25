import React from 'react';

const Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div><a href="/page">Some page</a></div>
      </div>

    );
  }
});

export default Home;

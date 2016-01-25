import React from 'react';
import Form from '../component/form';

const Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  render() {
    return (
      <div>
        <div>
          <h1>Home</h1>
          <div><a href="/page">Some page</a></div>
        </div>
        <Form/>
      </div>
    );
  }
});

export default Home;

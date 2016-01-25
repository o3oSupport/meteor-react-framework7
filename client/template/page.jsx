import React from 'react';

const Page = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    }
  },
  render() {
    return (
      <div>
        <h1>Page</h1>
        <p><a href="/more">More</a></p>
      </div>
    )
  }
});

export default Page;

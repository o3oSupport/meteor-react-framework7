import React from 'react';

const Page = React.createClass({
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
            <h1>Page</h1>
            <p><a href="/more">More</a></p>
          </div>
        </div>
      </div>
    )
  }
});

export default Page;

import React from 'react';
import Page from '../component/page';

let More = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    }
  },
  render() {
    return (
      <div className="pages navbar-through toolbar-through">
        <Page>
          <h1>More</h1>
          <p><a href="/">Back home</a></p>
        </Page>
      </div>
    )
  }
});

export default More;

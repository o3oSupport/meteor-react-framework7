import React from 'react';
import Form from '../component/form';

const More = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      something:"dfdf"
    }
  },
  getDefaultProps: function() {
    return {
      something: 'default value'
    };
  },
  render() {
    return (
      <div className="pages navbar-through toolbar-through">
        <div className="page">
          <div className="page-content">
            <h1>More</h1>
            <p><a href="/">Back home</a></p>
            <Form/>
          </div>
        </div>
      </div>
    )
  }
});

export default More;

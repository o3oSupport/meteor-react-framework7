import React from 'react';
import Input from './input';

const Form = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    return;
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  render() {
    return (
      <div>
        <div className="list-block">
          <ul>
            <li>
              <Input displayName="haha" name="haha" icon="1" />
            </li>
            <li>
              <Input displayName="hehe" name="hehe" icon="1" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

export default Form;

import React from 'react';
import Pager from '../component/pager';

const Index = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  componentDidMount() {

  },
  render() {
    return (
      <Pager>
        home
      </Pager>
    );
  }
});

export default Index;

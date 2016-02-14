import React from 'react';

const Home = React.createClass({
  componentWillMount() {
    Session.set("title","Home");
  },
  componentDidMount() {

  },
  render() {
    return (
      <div>

      </div>
    );
  }
});

export default Home;

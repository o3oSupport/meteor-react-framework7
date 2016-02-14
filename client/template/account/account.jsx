import React from 'react';
import Pager from '../../component/pager';

const Index = React.createClass({
  componentDidMount() {

  },
  render() {
    return (
      <Pager>
        <div className="boardwalk">
           <a className="ui button left" href="/login">登录</a>
           <a className="ui button right" href="/register">注册</a>
        </div>
      </Pager>
    );
  }
});

export default Index;

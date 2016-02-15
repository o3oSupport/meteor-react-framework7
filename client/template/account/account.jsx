import React from 'react';
import Pager from '../../component/pager';

import style from './account.import.css';  

const Index = React.createClass({
  componentDidMount() {

  },
  render() {
    return (
      <Pager>
        <div className={style.box}>
          <div>
            <img className={style.logo} src="images/logo.png"/>
            <div className={style.slogon}>有业务就来聊</div>
          </div>
        </div>
        <div className="boardwalk">
           <a className="ui button left" href="/login">登录</a>
           <a className="ui button right" href="/register">注册</a>
        </div>
      </Pager>
    );
  }
});

export default Index;

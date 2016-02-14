import React from 'react';
import Container from '../../component/container';

const Login = React.createClass({
  componentWillMount() {
    Session.set("title","注册");
  },
  componentDidMount() {

  },
  render() {
    return (
      <Container>
        <div className="ui form">
          <div className="field">
            <div className="ui left icon input">
              <input type="text" placeholder="手机号" />
              <i className="phone icon" />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <input type="text" placeholder="6-25位的字母数字或下划线" />
              <i className="lock icon" />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <input type="text" placeholder="获取验证码" />
              <i className="check square icon" />
            </div>
          </div>
          <div className="field">
             <br/>
          </div>         
          <div className="field">
            <button className="button">
              <i className="check circle icon"></i>
              同意协议并注册
            </button>
          </div>
          <div className="field text-center">
              <a className="text-hint" href="#">注册协议</a>
          </div>
        </div>
      </Container>
    );
  }
});

export default Login;

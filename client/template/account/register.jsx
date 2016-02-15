import React from 'react';
import Container from '../../component/container';

const Register = React.createClass({
  componentWillMount() {
    Session.set("title","登录");
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
             <br/>
          </div>         
          <div className="field">
            <button className="button">
              <i className="check circle icon"></i>
              登录
            </button>
          </div>   
          <div className="field flex-box text-hint inner-container">
            <div className="box text-left">
                <a href="#">注册账号</a>
            </div>
            <div className="box text-right">
                <a href="#">忘记密码</a>
            </div>
          </div>
          <div className="field">
              <br/>
          </div>
          <div className="field text-center">
              <div className="text-hint">
                第三方登录
              </div>
              <div>
            <div className="circle-box-container">
                <div className="circle-box blue-icon">
                      <i className="qq icon"></i>      
                </div>
                <div className="circle-box green-icon">
                      <i className="wechat icon"></i>
                </div>
                <div className="circle-box red-icon">
                      <i className="weibo icon"></i>
                </div>      
            </div>
            </div>
          </div>
       </div>
      
      </Container>
    );
  }
});

export default Register;

import React from 'react';

const Publish = React.createClass({
  componentWillMount() {
    Session.set("title","发布服务");    
  },  
  componentDidMount() {
    
  },
  render() {
    return (
      <div className="pages navbar-through toolbar-through">
        <div data-page="index" className="page">
          <div className="page-content">
            <div className="list-block">
              <ul>
                <li>
                  <a href="#" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        服务类型
                      </div>
                      <div className="item-after">公司注册</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        服务范围
                      </div>
                      <div className="item-after">上海</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        服务简介
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        服务详情
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        服务商标
                      </div>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
          <div className="boardwalk">
            <a className="button">提交</a>
          </div>
        </div>
      </div>
    );
  }
});

export default Publish;

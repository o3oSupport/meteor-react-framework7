import React from 'react';
import Page from '../component/page';

const Usercenter = React.createClass({
  componentDidMount() {
     Session.set('title',"个人资料");
  },
  render() {
    return (
      <div className="pages navbar-through toolbar-through">
        <Page>
            <div className="list-block">
              <ul>
                <li>
                  <a href="#name" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        姓名
                      </div>
                      <div className="item-after">王志民</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#title" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                      职位
                      </div>
                      <div className="item-after">设计师</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#co" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        公司名称
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        公司行业
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        公司特点
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        公司地址
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#website" className="item-link item-content">
                    <div className="item-inner">
                      <div className="item-title">
                        公司网址
                      </div>
                    </div>
                  </a>
                </li>

              </ul>
            </div>
        </Page>

        <Page name="name" cached>
          设置姓名
        </Page>
        <Page name="title" cached>
          设置职位
        </Page>
        <Page name="co" cached>
          设置公司
        </Page>
      </div>
    );
  }
});

export default Usercenter;

import React from 'react';

const MainLayout = React.createClass({
  getInitialState: function() {
    return {title:'业聊'};
  },
  componentDidMount(){
    // Initialize your app
    var App = new Framework7({
        animateNavBackIcon:true
    });

    // Export selectors engine
    var $ = Dom7;

    // Add main View
    var mainView = App.addView('.view-main', {
        // Enable dynamic Navbar
        dynamicNavbar: true,
        // Enable Dom Cache so we can use all inline pages
        domCache: true
    });
  },
  render() {
    const content = this.props.content();
    const title = this.state.title;
    return (
      <div className="view view-main">
        {/* Top Navbar*/}
        <div className="navbar">
          <div className="navbar-inner">
            {/* sliding */}
            <div className="left sliding"><a href="#" className="back link"> <i className="icon icon-back"></i><span>返回</span></a></div>
            <div className="center sliding">
              {title}
            </div>
            <div className="right">
                <a href="#" className="link icon-only open-panel">
                  <i className="icon icon-bars" />
                </a>
              </div>
            </div>
        </div>
          {/* Pages container*/}
          {content}
          {/* Bottom Toolbar*/}
          <div id="toolbar">

          </div>
        </div>
    );
  }
});

export default MainLayout;

import React from 'react';

let MainLayout = React.createClass({
  getInitialState(){
    return {content:this.props.content()};
  },
  componentDidMount(){
    // Initialize your app
    var App = new Framework7({
        animateNavBackIcon:true
    });

    // Export selectors engine
    var $$ = Dom7;

    // Add main View
    var mainView = App.addView('.view-main', {
        // Enable dynamic Navbar
        dynamicNavbar: true,
        // Enable Dom Cache so we can use all inline pages
        domCache: true
    });
  },
  render() {
    return (
      <div className="view view-main">
        {/* Top Navbar*/}
        <div className="navbar">
          <div className="navbar-inner">
            {/* sliding */}
            <div className="center sliding">
              Awesome App
            </div>
            <div className="right">
                <a href="#" className="link icon-only open-panel">
                  <i className="icon icon-bars" />
                </a>
              </div>
            </div>
          </div>
          {/* Pages container*/}
          {this.state.content}
          {/* Bottom Toolbar*/}
          <div className="toolbar">
            <div className="toolbar-inner">
              {/* Toolbar links */}
              <a href="#" className="link">
                Link 1
              </a>
              <a href="#" className="link">
                Link 2
              </a>
            </div>
          </div>
        </div>
    );
  }
});

export default MainLayout;

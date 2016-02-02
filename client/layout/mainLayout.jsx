import React from 'react';
import NavBar from '../component/navbar';

const MainLayout = React.createClass({
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

    return (
      <div className="view view-main">
        {/* Top Navbar*/}
           <NavBar/>
          {/* Pages container {content}*/}
           {content}
          {/* Bottom Toolbar*/}
          <div id="toolbar">
          </div>
        </div>
    );
  }
});

export default MainLayout;

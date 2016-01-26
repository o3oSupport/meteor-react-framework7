import React from 'react';

const MainLayout = ({content}) => (
  <div className="view view-main">
    {/* Top Navbar*/}
    <div className="navbar">
      <div className="navbar-inner">
        {/* We need cool sliding animation on title element, so we have additional "sliding" class */}
        <div className="center sliding">
          Awesome App
        </div>
        <div className="right">
          {/*
            Right link contains only icon - additional "icon-only" class
            Additional "open-panel" class tells app to open panel when we click on this link
            */}
            <a href="#" className="link icon-only open-panel">
              <i className="icon icon-bars" />
            </a>
          </div>
        </div>
      </div>
      {/* Pages container, because we use fixed-through navbar and toolbar, it has additional appropriate classes*/}
      <div className="pages navbar-through toolbar-through">
        {/* Page, "data-page" contains page name */}
        <div data-page="index" className="page">
          {/* Scrollable page content */}
          <div className="page-content">
            {content()}
          </div>
        </div>

      </div>
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

export default MainLayout;

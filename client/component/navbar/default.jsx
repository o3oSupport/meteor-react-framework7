import React from 'react';

const Default = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData() {
    return {
      title: Session.get('title')
    }
  },
  render() {
    const title = this.data.title;
    return (
      <div className="navbar-inner">
        {/* sliding */}
        <div className="left sliding">
          <a href="#" className="back link">
            <i className="icon icon-back">
            </i>
            <span>返回</span>
          </a>
        </div>
        <div className="center sliding">
          {title}
        </div>
        <div className="right">
          <a href="#" className="link icon-only open-panel">
            <i className="icon icon-bars" />
          </a>
        </div>
      </div>
    );
  }
});

export default Default;

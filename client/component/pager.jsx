import React from 'react';

const Pager = React.createClass({
  render() {
    return (
      <div className="pages navbar-through toolbar-through">
        <div data-page="index" className="page">
          <div className="page-content">
             {this.props.children}
          </div>
        </div>
      </div>
    )
  }
});

export default Pager;

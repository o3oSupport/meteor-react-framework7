import React from 'react';

const Container = React.createClass({
  render() {
    return (
      <div className="pages navbar-through toolbar-through">
        <div data-page="index" className="page">
          <div className="page-content">
            <div className="page-container">
             {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Container;

import React from 'react';

let Page = React.createClass({
  getDefaultProps() {
    return {
      name : 'index',
      cached : false
    };
  },
  render() {
    const { name,cached } = this.props;
    const type = cached?'page cached' : 'page page-on-center';
    return (
      <div data-page={ name } className={ type }>
        <div className="page-content">
           {this.props.children}
        </div>
      </div>
    )
  }
});

export default Page;

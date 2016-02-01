import React from 'react';

const Input = React.createClass({
  getDefaultProps() {
    return {
      placeholder : '',
      defaultValue :''
    };
  },
  render() {
    const { displayName,name,placeholder,defaultValue } = this.props;
    const { icon } = this.props;

    const Icon = ({icon}) => (
       <div className="item-media"><i className="icon icon-form-name"></i>{icon}</div>
    );

    return (
      <div className="item-content">
        <Icon/>
        <div className="item-inner">
          <div className="item-title label">{displayName}</div>
          <div className="item-input">
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              defaultValue={defaultValue}/>
          </div>
        </div>
      </div>
    );
  }
});

export default Input;

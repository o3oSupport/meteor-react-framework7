import React from 'react';

const Form = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    // var author = this.refs.author.value.trim();
    // var text = this.refs.text.value.trim();
    // if (!text || !author) {
    //   return;
    // }
    // let form = document.querySelector('form');
    // let obj = serialize(form, { hash: true });
    // console.log(obj);
    return;
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="list-block">
          <ul>
            <li>
              <div className="item-content">
                <div className="item-media">
                  <i className="icon icon-form-name" />
                </div>
                <div className="item-inner">
                  <div className="item-title label">Name</div>
                  <div className="item-input">
                    <input type="text" name="username" placeholder="Your name" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-content">
                <div className="item-media">
                  <i className="icon icon-form-email" />
                </div>
                <div className="item-inner">
                  <div className="item-title label">E-mail</div>
                  <div className="item-input">
                    <input type="email" name="email" placeholder="E-mail" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-content">
                <div className="item-media">
                <i className="icon icon-form-tel" />
              </div>
                <div className="item-inner">
                  <div className="item-title label">Phone</div>
                  <div className="item-input">
                    <input type="tel" name="phone" placeholder="Phone" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item-content buttons-row">
                  <button className="button button-raised" type="submit" name="action">
                        Submit
                  </button>
              </div>
            </li>
          </ul>
        </div>
        </form>
      </div>
    );
  }
});

export default Form;

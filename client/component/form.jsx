import React from 'react';

const Form = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    // var author = this.refs.author.value.trim();
    // var text = this.refs.text.value.trim();
    // if (!text || !author) {
    //   return;
    // }

    let form = document.querySelector('form');
    console.log(form);
    return;
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">
                First Name
              </label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">
                Last Name
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input disabled defaultValue="I am not editable" id="disabled" type="text" className="validate" />
              <label htmlFor="disabled">Disabled</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <button className="btn waves-effect waves-light" type="submit" name="action">
                  Submit
                  <i className="material-icons right">send</i>
            </button>
          </div>

        </form>
      </div>
    );
  }
});

export default Form;

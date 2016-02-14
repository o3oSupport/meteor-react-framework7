import React from 'react';
import Input from './input';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {something: props.something};    
  }
  render() {
    return (
      <div>
        <div className="list-block">
          <ul>
            <li>
              {this.state.something}ssss

            </li>
            <li>
              <Input displayName="haha" name="haha" icon="1" />
            </li>
            <li>
              <Input displayName="hehe" name="hehe" icon="1" />
            </li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Form;

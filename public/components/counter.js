/**
 * Created by showzyl on 16/9/22.
 */

'use strict';

import React, {Component, PropTypes} from 'react';

export default class count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  fnAdd(e) {
    this.state.count++;
    this.setState({
      count: this.state.count
    });
  }

  fnMinus(e) {
    this.state.count--;
    this.setState({
      count: this.state.count
    });
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <button onClick={(e) => this.fnAdd(e)}>+</button>
        <span>{count}</span>
        <button onClick={(e) => this.fnMinus(e)}>-</button>
      </div>
    )
  }

}

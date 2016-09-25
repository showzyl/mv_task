/**
 * Created by showzyl on 16/9/22.
 */

'use strict';

import React, {Component, PropTypes} from 'react';
import 'todomvc-app-css/index.css';

class ReduceCounter extends Component {

  // must add exlint it can work
  static PropTypes = {
    count: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    minus: PropTypes.func.isRequired
  }
  
  Alert = (e) => {
    alert(123);
  }
  
  render() {
    let {count, add, minus} = this.props;
    console.log(this.props);
    return (
      <div>
        <button onClick={(e) => add(e)}>+</button>
        <div onClick={this.Alert}>{count}</div>
        <button onClick={(e) => minus(e)}>-</button>
      </div>
    )
  }

}

export default ReduceCounter;


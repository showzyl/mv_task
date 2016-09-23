/**
 * Created by showzyl on 16/9/22.
 */

'use strict';

import React, {Component, PropTypes} from 'react';
import 'todomvc-app-css/index.css';
//console.log(this);

class ReduceCounter extends React.Component {
  Alert(e){
    alert(123);
  }
  render() {
    let {count, add, minus} = this.props;
    console.log(this.props);
    return (
      <div>
        <button onClick={(e) => add(e)}>+</button>
        <div onClick={(e) => this.Alert(e)}>{count}</div>
        <button onClick={(e) => minus(e)}>-</button>
      </div>
    )
  }

}

export default ReduceCounter;


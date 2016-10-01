/**
 * Created by showzyl on 16/9/30.
 */

'use strict';

import React, {Component, PropTypes} from 'react'

export default class List extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  onChange(e){
    this.setState({
      value: e.target.value
    });
    console.log(e.target.value);
  }
  onSubmit(){
    alert(123);
  }
  render(){
    return (
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    )
  }
}
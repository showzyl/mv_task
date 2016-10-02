/**
 * Created by showzyl on 16/9/30.
 */

'use strict';

import React, {Component, PropTypes} from 'react'

export default class List extends Component{
  constructor(props) {
    super(props);
    // this.state = this.props;
    // console.log(this.state);
  }
  render(){
    return (
      <ul>
        {this.props.list.map((item, i) =>
          <Li item={item} key={i}/>
        )}
      </ul>
    )
  }
}

class Li extends Component{
  handleClick(){
    alert(1);
  }
  render(){
    let {item} = this.props;
    return (
      <li onClick={e => this.handleClick(e)}>{item.txt}</li>
    )
  }
}
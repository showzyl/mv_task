/**
 * Created by showzyl on 16/9/30.
 */

'use strict';

import React, {Component, PropTypes} from 'react'
import '../../style/style.css'

export default class List extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    //console.log(this.props);
    return (
      <ul>
        {this.props.list.map((item, i) =>
          <Li item={item} index={i} key={i} handleCheck={e => this.props.handleCheck(e, i)}/>
        )}
      </ul>
    )
  }
}

class Li extends Component{
  handleClick(e, i){
    let {item, handleCheck} = this.props;
    handleCheck(e, i);
  }
  render(){
    let {item,index} = this.props;
    let className = item.bCheck ? 'remove' : '';
    return (
      <li onClick={e => this.handleClick(e, index)} className={className}>{item.txt}</li>
    )
  }
}
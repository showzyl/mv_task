/**
 * Created by showzyl on 16/9/30.
 */

'use strict';

import React, {Component, PropTypes} from 'react'

export default class Header extends Component{
  constructor(props) {
    super(props);
    this.state = this.props
  }
  onChange(e){
    this.setState({
      value: e.target.value
    })
  }
  onSubmit(e, value){
    let addList = this.props.addList;
    addList(value);
    this.setState({
      value: ''
    })
  }
  handleKeyUp(e, value){
    if(e.keyCode === 13){
      this.onSubmit(e, value);
    }
  }

  render(){
    let {value} = this.state;
    return (
      <header>
        <input type="text" placeholder="输入点什么"
               onChange={e => this.onChange(e)}
               value={value}
               onKeyUp={e => this.handleKeyUp(e, value)}
        />
        <button onClick={e => this.onSubmit(e, value)}>提交</button>
      </header>
    )
  }  
}

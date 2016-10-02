/**
 * Created by showzyl on 16/9/30.
 */

'use strict';

import React, {Component, PropTypes} from 'react'

export default class Header extends Component{
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = this.props
  }
  onChange(e){
    this.setState({
      value: e.target.value
    });
    //console.log(e.target.value);
  }
  onSubmit(value){
    let addList = this.props.addList;
    addList(value);
    this.setState({
      value: ''
    });
  }
  render(){
    return (
      <header>
        <input type="text" placeholder="输入点什么"
               onChange={e => this.onChange(e)}
               value={this.state.value} />
        <button onClick={e => this.onSubmit(this.state.value)}>提交</button>
      </header>
    )
  }  
}

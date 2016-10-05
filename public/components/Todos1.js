/**
 * Created by showzyl on 16/9/30.
 */

'use strict';

import React, {Component, PropTypes} from 'react'
import Header from './todos1/Header'
import List from './todos1/List'
import Footer from './todos1/Footer'

class Todos extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [{
        txt: '第一条数据',
        bCheck: false
      }]
    }
  }
  addList(value){
    let {list} = this.state;
    list.push({
      txt: value,
      bCheck: false
    });
    this.setState({
      value: '',
      list: list
    })
  }
  handleCheck(e, i){
    let {list} = this.state;
    list[i].bCheck = !list[i].bCheck;
    this.setState({
      list: list
    })
  }
  filerList(list){
    this.setState({
      list: list
    })
  }
  render(){
    let {list} = this.state;
    return (
      <div>
        <Header {...this.state} addList={e => this.addList(e)}/>
        <List list={list} handleCheck={(e, i) => this.handleCheck(e, i)}/>
        <Footer list={list} filerList={this.filerList.bind(this)}/>
      </div>
    )
  }
}

export default Todos





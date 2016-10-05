/**
 * Created by showzyl on 16/10/2.
 */

'use strict';


import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

console.log(_);

let data = [
  {
    type: 'all',
    check: true
  },
  {
    type: 'active',
    check: false
  },
  {
    type: 'completed',
    check: false
  }
];

export default class Footer extends Component{
  constructor(props) {
    super(props);
    let {list} = props;
    console.log(list);
    this.state = {
      data,
      list
    }
  }
  handleClick(e, index, type){
    let {list} = this.state;
    let {filerList} = this.props;
    data.forEach((item, i) => {
      if(index !== i){
        data[i].check = false;
      }else{
        data[i].check = !data[i].check;
      }
      return item;
    });
    console.log(list);
    let newList = this.handleList(type, list);
    //console.log(data, list, filerList);
    this.setState({
      data,
      list: newList
    })
  }
  handleList(type, list){
    console.log(type);
    // copy list && change list

    switch (type){
      case 'active':
        return list.map(item => {
          console.log(item);
          if(item.bCheck) return item;
        });
        break;
      case 'completed':
        return list.map(item => {
          if(!item.bCheck) return item;
        });
        break;
      default:
        return list;
    }
  }
  render(){
    let {data} = this.state;
    return (
      <footer>
        <p>
          Show:
          {data.map((item, i) =>
            <FooterList item={item} key={i} index={i} handleClick={(e) => this.handleClick(e, i, item.type)}/>
          )}
        </p>
      </footer>
    )
  }
}

class FooterList extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let {item, index, handleClick} = this.props;
    if(item.check){
      return (
        <span> {item.type} </span>
      )
    }else{
      let type = item.type;
      //console.log(type);
      return (
        <a href="javascript:;" onClick={(e) => handleClick(e, index, type)}> {type} </a>
      )
    }
  }
}

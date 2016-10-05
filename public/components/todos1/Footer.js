/**
 * Created by showzyl on 16/10/2.
 */

'use strict';


import React, {Component, PropTypes} from 'react'

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
    this.state = {
      data
    };
    //console.log(this.state);
  }
  handleClick(e, index){
    data.forEach((item, i) => {
      if(index !== i){
        data[i].check = false;
      }else{
        data[i].check = !data[i].check;
      }
      return item;
    });
    this.setState({
      data
    });
  }
  render(){
    let {data} = this.state;
    return (
      <footer>
        <p>
          Show:
          {data.map((item, i) =>
            <FooterList item={item} key={i} index={i} handleClick={(e) => this.handleClick(e, i)}/>
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
    //console.log(this.props);
    if(item.check){
      return (
        <span> {item.type} </span>
      )
    }else{
      return (
        <a href="javascript:;" onClick={(e) => handleClick(e, index)}> {item.type} </a>
      )
    }
  }
}

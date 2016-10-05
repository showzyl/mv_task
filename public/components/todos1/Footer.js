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
    this.state = this.props
  }
  handleClick(e, i){

  }
  render(){
    return (
      <footer>
        <p>
          Show:
          {data.map((item, i) =>
            <FooterList item={item} key={i} index={i}/>
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
    let {item} = this.props;
    console.log(this.props);
    if(item.check){
      return (
        <span> {item.type} </span>
      )
    }else{
      return (
        <a href="javascript:;"> {item.type} </a>
      )
    }
  }
}

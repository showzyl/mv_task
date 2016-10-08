/**
 * Created by showzyl on 16/10/2.
 */

'use strict';


import React, {Component, PropTypes} from 'react'
import _ from 'lodash'


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
    }
  }

  handleClick(e, index, type){
    let {filerList} = this.props;
    let {list} = this.props;
    data.forEach((item, i) => {
      if(index !== i){
        data[i].check = false;
      }else{
        data[i].check = !data[i].check;
      }
      return item;
    });
    //console.log(list);
    console.log(this.props.list);

    //console.log(newList);
    this.setState({
      data
    });

    let newList = this.handleList(type, list);
    
    filerList(newList);
    console.log(this.state);
  }

  handleList(type, list){
    console.log(type);
    // copy list && change list
    let newList = _.cloneDeep(list);
    let res;
    switch (type){
      case 'active':
        res = _.filter(newList, item => {
          if(!item.bCheck) return item;
        });
        console.log(res);
        return res;
        break;
      case 'completed':
        res = _.filter(newList, item => {
          //console.log(item);
          if(item.bCheck) return item;
        });
        console.log(res);
        return res;
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

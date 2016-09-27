/**
 * Created by showzyl on 16/9/26.
 */

'use strict';
//import $ from 'jquery';
import 'whatwg-fetch';
import React, {Component, PropTypes} from 'react';

// const Picker = ({}) => (
//   <span>
//     <h1>测试1</h1>
//     <select>
//       <option value="测试1" selected="selected"></option>
//       <option value="测试2"></option>
//     </select>
//   </span>
// );

let aReddit = ['reactjs', 'frontend'];

class Picker extends Component {
  constructor(props) {
    //console.log($);
    let reddit = 'reactjs';
    fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
      }).catch(err => {
        throw new Error(err);
        //console.log(err);
      });

    super(props);
    this.state = {
      value: '测试1'
    }
  }

  changeSel = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  render() {
    return (
      <span>
        <h1>{this.state.value}</h1>
        <select onChange={this.changeSel} value={this.state.value}>
          <option value="测试1">测试1</option>
          <option value="测试2">测试2</option>
        </select>
      </span>
    )
  }
}

export default Picker;
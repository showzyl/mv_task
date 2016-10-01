/**
 * Created by showzyl on 16/9/30.
 */

'use strict';

import React, {Component, PropTypes} from 'react'
import Header from './todos1/Header'
import List from './todos1/List'

// const Todos = () => (
//   <div>
//     todos1
//   </div>
// );

class Todos extends Component{
  
  render(){
    return (
      <div>
        <Header/>
        <List/>
      </div>
    )
  }
}

export default Todos





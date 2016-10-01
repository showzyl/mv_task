/**
 * Created by showzyl on 16/9/22.
 */

'use strict';

import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import storeReducer from './reducers/'


const store = createStore(storeReducer, window.devToolsExtension && window.devToolsExtension());

//console.log(store.getState());
//console.log(store);
// import Counter from './components/counter';
//import ReduceCounter from './components/ReduceCounter';

import Picker from './components/Picker'
import Todos from './components/Todos1'


const el = document.querySelector('#root');

const elRender = () => render(
  // {<ReduceCounter count={store.getState()}
  //       add={() => store.dispatch({type: 'ADD'})}
  //       minus={() => store.dispatch({type: 'MINUS'})}
  // />,}
  // <Picker />,
  <Todos/>,
  el
);

elRender();
store.subscribe(elRender);


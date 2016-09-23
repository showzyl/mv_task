/**
 * Created by showzyl on 16/9/22.
 */

'use strict';

import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux'

console.log(createStore);

// import Counter from './components/counter';
import Test from './components/Test';

const el = document.querySelector('#root');

const elRender = () => render(
  <Test/>,
  el
);

elRender();


//require('./js/t.js')();
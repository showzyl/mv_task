/**
 * Created by showzyl on 16/9/23.
 */

'use strict';

export default (state = 0, action) => {
  switch (action.type){
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}


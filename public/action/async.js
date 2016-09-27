/**
 * Created by showzyl on 16/9/25.
 */

'use strict';
export const REQUEST = 'REQUEST';
export const RECEIVE = 'RECEIVE';
export const SELECT = 'SELECT';
export const INVALID = 'INVALID';

export const fnSelect = reddit => ({
  type: SELECT,
  reddit
});

export const fnInvalid = reddit => ({
  type: INVALID,
  reddit
});

export const fnRequest = reddit => ({
  type: REQUEST,
  reddit
});

export const fnReceive = (reddit, json) => ({
  type: RECEIVE,
  reddit,
  posts: json.data.children.map( child => child.data ),
  ts: new Date()
});













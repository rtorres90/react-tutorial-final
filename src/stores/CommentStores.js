/**
 * Created by rtorres on 11/15/16.
 */

import Reflux from 'reflux';
import io from 'socket.io-client'

import CommentActions from '../actions/CommentActions';

let CommentStore = Reflux.createStore({
  listenables: [CommentActions],
  init: function () {
    this.socket = io('http://localhost:3000');
    this.socket.on('data', (data) => {
      this.trigger(data);
    });
  },
  fetchComments: function () {
    this.socket.emit('read');
  }
});

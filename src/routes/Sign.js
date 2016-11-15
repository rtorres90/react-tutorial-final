/**
 * Created by rtorres on 11/15/16.
 */

import React from 'react';
import ReactMixin from 'react-mixin';
import Reflux from 'reflux';

import CommentBox from '../components/CommentBox';
import CommentStore from '../stores/CommentStores';
import CommentActions from '../actions/CommentActions';

@ReactMixin.decorate(Reflux.connect(CommentStore, 'comments'))
export default class Sign extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){
    CommentActions.fetchComments();
  }

  render(){
    return (
        <div class='sign'>
          <CommentBox/>
        </div>
    );
  }
}

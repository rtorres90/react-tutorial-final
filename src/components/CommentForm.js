/**
 * Created by rtorres on 11/15/16.
 */

import React from 'react';

export default class CommentForm extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <form class='commentForm'>
        <input type='text' name='author' placeholder='tu nombre'/>
        <input type='text' name='text' placeholder='firma!'/>
        <input type='hidden' name='id' value={ Date.now() }/>
        <input type='submit' value='Firma!'/>
      </form>
    );
  }
}

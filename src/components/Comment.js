/**
 * Created by rtorres on 11/15/16.
 */

import React from 'react';


export default class Comment extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class='comment'>
        <h2>Nombre author</h2>
        <p>Comment</p>
      </div>
    );
  }
}

/**
 * Created by rtorres on 11/15/16.
 */

import React from 'react'
import {Link} from 'react-router'

export default class Home extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
        <div class='home'>
          <h1>React, pasa y firma</h1>
          <Link to='sign'>Firma ahora</Link>
        </div>
    );
  }
}

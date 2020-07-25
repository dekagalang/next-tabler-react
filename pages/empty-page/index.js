// @flow

import * as React from "react";
import { withRouter } from "react-router";

import { UserContext } from '../../providers/master'

  class Home2 extends React.Component {
    static contextType = UserContext;
    render(){
      // console.log(this.context)
      return (
        <div>
        </div>
      );
    }
}

export default Home2;

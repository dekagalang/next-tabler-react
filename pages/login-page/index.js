// @flow

import * as React from "react";

import { SessionContext } from '../../providers/session'
// import SiteWrapper from "../SiteWrapper";
import styled from 'styled-components'
import {
  // Site,
  // Grid,
  // List,
  // Button,
  Page
} from "tabler-react";

const LoginContainer = styled.div`
  display: block;
  >div{
    text-align: center
  }
`

  class LoginPage extends React.Component {
    static contextType = SessionContext;
    render(){
      // console.log(this.context)
      return (
        <LoginContainer>
          <Page.Content>
            login page
          </Page.Content>
        </LoginContainer>
      );
    }
}

export default LoginPage;

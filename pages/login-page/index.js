// @flow

import * as React from "react";

import { SessionContext } from '../../providers/session'
// import SiteWrapper from "../SiteWrapper";
import styled from 'styled-components'
import {
  // Site,
  // Grid,
  // List,
  Card,
  Button,
  Form,
  Page,
  // LoginPage
} from "tabler-react";

const LoginContainer = styled.div`
  display: block;
  >div{
    .container{
      padding: 20px;
      width: 400px;
      button{
        width: 100%;
      }
    }
  }
`

  class LoginScreen extends React.Component {
    static contextType = SessionContext;
    render(){
      const {
        store: {
          login,
          credentialOnChange
        }
      } = this.context
      // console.log(this.context)
      return (
        // <LoginPage/>
        <LoginContainer>
          <Page.Content>
            <Card>
              <Card.Body>
                <Card.Title>
                  Login to Super Dock
                </Card.Title>
                <Form onSubmit={(e) => login(e)}>
                  <Form.Group>
                    <Form.Input onChange={(e)=>credentialOnChange(e)} name='username' label='Username' placeholder='Username' />
                  </Form.Group>
                  <Form.Group>
                    <Form.Input onChange={(e)=>credentialOnChange(e)} name='password' label='Password' type="password" placeholder='Password' />
                  </Form.Group>
                  <Form.Footer>
                    
                  </Form.Footer>
                  <Button type="submit" color="primary">Submit</Button>
                </Form>
              </Card.Body>
            </Card>
          </Page.Content>
        </LoginContainer>
      );
    }
}

export default LoginScreen;

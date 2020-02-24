import React, { Fragment } from 'react';
import { Grid, Button, Menu, Header } from 'semantic-ui-react';
import './navbar.css'
import { Icon } from 'semantic-ui-react'

const NavBar = (props) => {
  const { visible, setVisible } = props;
  return (

    <Grid className="uwaiter-navbar">
      <Grid.Column  >

        <Menu secondary style={{ height: "100%" }}>
          {/*         <Menu.Item >
             <Icon   size="large" className="toggle-menu" onClick={()=>{setVisible(!visible) }} name="bars" />
      </Menu.Item> */}
          <Menu.Item>
            <Header as="h5" >
     
              LOGO
      </Header>
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Header as="h5" >
                <Icon name="sign-out alternate"></Icon>
                Logout
      </Header>
            </Menu.Item>

          </Menu.Menu>
        </Menu>
      </Grid.Column>

    </Grid>
  )
}

export default NavBar
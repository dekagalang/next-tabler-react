// @flow

import * as React from "react";
// import { NavLink, withRouter, Link } from "react-router-dom";
import Router, { useRouter } from 'next/router'

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";

import Link from '../components/Link'

import { NotificationProps } from "tabler-react";

// type Props = {|
//   +children: React.Node,
// |};

// type State = {|
//   notificationsObjects: Array<NotificationProps>,
// |};

// type subNavItem = {|
//   +value: string,
//   +to?: string,
//   +icon?: string,
//   +LinkComponent?: React.ElementType,
//   +useExact?: boolean,
// |};

// type navItem = {|
//   +value: string,
//   +to?: string,
//   +icon?: string,
//   +active?: boolean,
//   +LinkComponent?: React.ElementType,
//   +subItems?: Array<subNavItem>,
//   +useExact?: boolean,
// |};

// const navBarItems: Array<navItem> = [
const navBarItems = [
  {
    value: "Home",
    // to: "/homePage2.react",
    icon: "home",
    // LinkComponent: () => <span onClick={() => Router.push('/homePage2')}>Click me</span>,
    LinkComponent: () => (
      <Link href="/homepage2">
        About Us
      </Link>
    ),
    // useExact: true,
  },
  // {
  //   value: "Interface",
  //   icon: "box",
  //   subItems: [
  //     {
  //       value: "Cards Design",
  //       to: "/cards",
  //       LinkComponent: NavLink,
  //     },
  //     { value: "Charts", to: "/charts", LinkComponent: NavLink },
  //     {
  //       value: "Pricing Cards",
  //       to: "/pricing-cards",
  //       LinkComponent: NavLink,
  //     },
  //   ],
  // },
  // {
  //   value: "Components",
  //   icon: "calendar",
  //   subItems: [
  //     { value: "Maps", to: "/maps", LinkComponent: NavLink },
  //     { value: "Icons", to: "/icons", LinkComponent: NavLink },
  //     { value: "Store", to: "/store", LinkComponent: NavLink },
  //     { value: "Blog", to: "/blog", LinkComponent: NavLink },
  //   ],
  // },
  // {
  //   value: "Pages",
  //   icon: "file",
  //   subItems: [
  //     { value: "Profile", to: "/profile", LinkComponent: NavLink },
  //     { value: "Login", to: "/login", LinkComponent: NavLink },
  //     {
  //       value: "Register",
  //       to: "/register",
  //       LinkComponent: NavLink,
  //     },
  //     {
  //       value: "Forgot password",
  //       to: "/forgot-password",
  //       LinkComponent: NavLink,
  //     },
  //     { value: "400 error", to: "/400", LinkComponent: NavLink },
  //     { value: "401 error", to: "/401", LinkComponent: NavLink },
  //     { value: "403 error", to: "/403", LinkComponent: NavLink },
  //     { value: "404 error", to: "/404", LinkComponent: NavLink },
  //     { value: "500 error", to: "/500", LinkComponent: NavLink },
  //     { value: "503 error", to: "/503", LinkComponent: NavLink },
  //     { value: "Email", to: "/email", LinkComponent: NavLink },
  //     {
  //       value: "Empty page",
  //       to: "/empty-page",
  //       LinkComponent: NavLink,
  //     },
  //     { value: "RTL", to: "/rtl", LinkComponent: NavLink },
  //   ],
  // },
  // {
  //   value: "Forms",
  //   to: "/form-elements",
  //   icon: "check-square",
  //   LinkComponent: NavLink,
  // },
  // {
  //   value: "Gallery",
  //   to: "/gallery",
  //   icon: "image",
  //   LinkComponent: NavLink,
  // },
  {
    icon: "file-text",
    value: "Documentation",
    to:
      process.env.NODE_ENV === "production"
        ? "https://tabler.github.io/tabler-react/documentation"
        : "/documentation",
  },
];

const accountDropdownProps = {
  avatarURL: "./demo/faces/female/25.jpg",
  name: "Jane Pearson",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { icon: "mail", value: "Inbox", badge: "6" },
    { icon: "send", value: "Message" },
    { isDivider: true },
    { icon: "help-circle", value: "Need help?" },
    { icon: "log-out", value: "Sign out" },
  ],
};

class SiteWrapper extends React.Component{
  state = {
    notificationsObjects: [
      {
        unread: true,
        avatarURL: "demo/faces/male/41.jpg",
        message: (
          <React.Fragment>
            <strong>Nathan</strong> pushed new commit: Fix page load performance
            issue.
          </React.Fragment>
        ),
        time: "10 minutes ago",
      },
      {
        unread: true,
        avatarURL: "demo/faces/female/1.jpg",
        message: (
          <React.Fragment>
            <strong>Alice</strong> started new task: Tabler UI design.
          </React.Fragment>
        ),
        time: "1 hour ago",
      },
      {
        unread: false,
        avatarURL: "demo/faces/female/18.jpg",
        message: (
          <React.Fragment>
            <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
          </React.Fragment>
        ),
        time: "2 hours ago",
      },
    ],
  };

  render() {
    // console.log(navBarItems)
    const notificationsObjects = this.state.notificationsObjects || [];
    const unreadCount = this.state.notificationsObjects.reduce(
      (a, v) => a || v.unread,
      false
    );
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Tabler React",
          imageURL: "./demo/brand/tabler.svg",
          // navItems: (
          //   <Nav.Item type="div" className="d-none d-md-flex">
          //     <Button
          //       href="https://github.com/tabler/tabler-react"
          //       target="_blank"
          //       outline
          //       size="sm"
          //       RootComponent="a"
          //       color="primary"
          //     >
          //       Source code
          //     </Button>
          //   </Nav.Item>
          // ),
          notificationsTray: {
            notificationsObjects,
            markAllAsRead: () =>
              this.setState(
                () => ({
                  notificationsObjects: this.state.notificationsObjects.map(
                    v => ({ ...v, unread: false })
                  ),
                }),
                () =>
                  setTimeout(
                    () =>
                      this.setState({
                        notificationsObjects: this.state.notificationsObjects.map(
                          v => ({ ...v, unread: true })
                        ),
                      }),
                    5000
                  )
              ),
            unread: unreadCount,
          },
          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
        // routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          links: [
            <a href="#">First Link</a>,
            <a href="#">Second Link</a>,
            <a href="#">Third Link</a>,
            <a href="#">Fourth Link</a>,
            <a href="#">Five Link</a>,
            <a href="#">Sixth Link</a>,
            <a href="#">Seventh Link</a>,
            <a href="#">Eigth Link</a>,
          ],
          note:
            "Premium and Open Source dashboard template with responsive and high quality UI. For Free!",
          copyright: (
            <React.Fragment>
              Copyright © 2019
              <a href="."> Tabler-react</a>. Theme by
              <a
                href="https://codecalm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                codecalm.net
              </a>{" "}
              All rights reserved.
            </React.Fragment>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </List.Item>
                  <List.Item className="list-inline-item">
                    <a href="./faq.html">FAQ</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col auto={true}>
                <Button
                  href="https://github.com/tabler/tabler-react"
                  size="sm"
                  outline
                  color="primary"
                  RootComponent="a"
                >
                  Source code
                </Button>
              </Grid.Col>
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;

import * as React from "react";
import { withRouter } from 'next/router'
import { useRouter } from 'next/router'

import HomePage from "./home-page";

// import { createMemoryHistory, createBrowserHistory } from 'history';

// const history = createMemoryHistory();

function Page({ router }) {
  // console.log(router.pathname)
  return(
    <HomePage/>
  )
}

export default withRouter(Page);

import { withRouter } from "next/router"

import HomePage from "./home-page";

// function Page({ router }) {
export const Page = () => {
  // console.log(router.pathname)
  return(
    <HomePage/>
  )
}

export default withRouter(Page);

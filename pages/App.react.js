import { withRouter } from "next/router"

// import Home from "./home-page";
import LoginPage from "./login-page";

// function Page({ router }) {
export const Page = () => {
  // console.log(router.pathname)
  return(
    <LoginPage/>
    // <Home/>
  )
}

export default withRouter(Page);

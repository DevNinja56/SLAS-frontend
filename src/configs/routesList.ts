import About from "@views/About"
import Business from "@views/Business"
import Contact from "@views/Contact"
import FAQ from "@views/FAQ"
import Home from "@views/Home"
import Features from "@views/Features"
import SignUp from "@views/Auth/SignUp"
import SignIn from "@views/Auth/SignIn"
import OTP from "@views/OTP"
import Dashboard from "@views/Dashboard"
import { URL } from "./index"

export const ROUTE_LIST = [
  {
    link: URL.SIGN_UP,
    element: SignUp,
    isLayout: true
  },
  {
    link: URL.SIGN_IN,
    element: SignIn,
    isLayout: true
  },
  {
    link: URL.OTP,
    element: OTP,
    isLayout: true
  },
  {
    link: URL.HOME,
    element: Home,
    isLayout: true
  },
  {
    link: URL.ABOUT,
    element: About,
    isLayout: true
  },
  {
    link: URL.BUSINESS,
    element: Business,
    isLayout: true
  },
  {
    link: URL.CONTACT,
    element: Contact,
    isLayout: true
  },
  {
    link: URL.FAQ,
    element: FAQ,
    isLayout: true
  },
  {
    link: URL.FEATURES,
    element: Features,
    isLayout: true
  },
  {
    link: URL.DASHBOARD,
    element: Dashboard,
    isLayout: false
  }
]

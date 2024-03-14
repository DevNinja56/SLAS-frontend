import About from "@views/About"
import Business from "@views/Business"
import Contact from "@views/Contact"
import FAQ from "@views/FAQ"
import Home from "@views/Home"
import Features from "@views/Features"
import { URL } from "./index"

export const ROUTE_LIST = [
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
  }
  //   {
  //     link: route path,
  //     element: component,
  //     isLayout: true / false
  //   },
]

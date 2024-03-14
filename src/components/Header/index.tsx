import { URL } from "@configs/index"
import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex w-full">
      <div className="w-11/12 mx-auto flex justify-between my-8">
        <span>logo</span>
        <div className="flex gap-16">
          <NavLink to={URL.HOME} className="font-semibold">
            Home
          </NavLink>
          <NavLink to={URL.ABOUT} className="font-semibold">
            About SlasPay
          </NavLink>
          <NavLink to={URL.FEATURES} className="font-semibold">
            Features
          </NavLink>
          <NavLink to={URL.BUSINESS} className="font-semibold">
            Business
          </NavLink>
          <NavLink to={URL.FAQ} className="font-semibold">
            FAQ
          </NavLink>
          <NavLink to={URL.CONTACT} className="font-semibold">
            Contact
          </NavLink>
          <div className="flex">
            <NavLink to={URL.SIGN_IN} className="font-semibold">
              Sign in
            </NavLink>{" "}
            /
            <NavLink to={URL.SIGN_UP} className="font-semibold">
              {" "}
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

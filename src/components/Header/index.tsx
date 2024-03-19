import { URL } from "@configs/index"
import React, { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import SideBar from "@components/SideBarSection"
import { FaRegArrowAltCircleRight } from "react-icons/fa"
import DropDownMenu from "@components/DropdownMenu"

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)

  const toggleSidebar = () => {
    console.log("yes")
    setShowSidebar(!showSidebar)
  }

  const onShowDropDown = () => {
    setShowDropDown(!showDropDown)
  }

  const dropDownRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex w-full relative">
      <div className="w-10/12 mx-auto flex justify-between my-8">
        <img src="assets/images/Home/logo.PNG" alt="Logo" onClick={toggleSidebar} className="cursor-pointer" />
        {showSidebar && <SideBar onClose={toggleSidebar} />}
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
          <div onClick={onShowDropDown} ref={dropDownRef} className="cursor-pointer">
            <span className="font-semibold">
              Business
            </span>
            <DropDownMenu showDropDown={showDropDown} setShowDropDown={setShowDropDown} dropDownRef={dropDownRef} />
          </div>
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
              Sign Up <FaRegArrowAltCircleRight className="text-GreenBgColor inline" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

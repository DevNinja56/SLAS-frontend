import React from "react"
import SearchInput from "@components/Common/SearchInput"
import { FaRegUserCircle } from "react-icons/fa"
import { FaBell } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <span className="text-OrangeTextColor font-bold">Dashboard</span>
      <div className="flex justify-between items-center gap-4">
        <SearchInput placeholder="Search..." className="" />
        <div className="flex items-center gap-2">
          <FaRegUserCircle className="text-2xl text-OrangeTextColor"/>
          <span className="font-bold">Indrani Sen</span>
        </div>
        <FaBell className="text-GreenBgColor p-4 rounded bg-white"/>
      </div>
    </div>
  )
}

export default Navbar

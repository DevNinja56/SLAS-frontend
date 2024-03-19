import React from "react"
import SearchInput from "@components/Common/SearchInput"
import { FaRegUserCircle } from "react-icons/fa"
import { BsBellFill } from "react-icons/bs"

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 w-full bg-DashboardBgColor">
      <span className="text-OrangeTextColor font-bold text-2xl">Dashboard</span>
      <div className="flex justify-between items-center gap-4">
        <SearchInput placeholder="Search..." className="" />
        <div className="flex items-center gap-2">
          <FaRegUserCircle className="text-2xl text-OrangeTextColor" />
          <span className="font-bold">Indrani Sen</span>
        </div>
        <BsBellFill className="text-2xl text-GreenBgColor" />
      </div>
    </div>
  )
}

export default Navbar

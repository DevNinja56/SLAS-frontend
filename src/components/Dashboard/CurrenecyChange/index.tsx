import React from "react"
import InputBox from "@components/Common/Input"
import TagButton from "@components/TagButton"
import { FaArrowAltCircleRight } from "react-icons/fa"

const CurrencyChange = () => {
  return (
    <div className="flex flex-col gap-2 w-4/12">
      <div className="flex p-2 bg-DashboardBgColor rounded-lg justify-between">
        <p className="flex flex-col">
          <span className="text-GreenBgColor  font-bold">Your Wallet Balance</span>
          <span className="text-OrangeTextColor text-xl font-bold">$5792.323</span>
        </p>
        <TagButton text="-0.89%" className="bg-purple-200 rounded-full text-red-500" />
      </div>
      <div className="flex flex-col gap-4 bg-purple-200 rounded-lg py-10 px-2">
        <p className="flex justify-between">
          <span className="font-medium">Currency Conversion</span>
          <FaArrowAltCircleRight className="text-xl text-GreenBgColor"/>
        </p>
        <InputBox type="text" placeholder="1000" />
        <InputBox type="text" placeholder="87000" />
      </div>
    </div>
  )
}

export default CurrencyChange

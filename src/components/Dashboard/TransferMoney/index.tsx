import React from "react"
import Button from "@components/Common/Button"
import { MdOutlineCurrencyExchange } from "react-icons/md";

const TransferMoney = () => {
  return (
    <div className="bg-DashboardBgColor p-4">
      <div className="flex gap-4 border-b-2 border-gray-300 pb-8">
        <div className="border-2 border-gray-300 rounded-md py-4 px-8 bg-white">
          <span className="font-xl font-medium ">Wallet <br /> Transfer</span>
        </div>
        <div className="border-2 border-gray-300 rounded-md py-4 px-8 bg-white">
          <span className="font-xl font-medium ">Transfer <br /> to Other</span>
        </div>
        <div className="border-2 border-gray-300 rounded-md py-4 px-8 bg-white">
          <span className="font-xl font-medium ">Self <br /> Transfer</span>
        </div>
      </div>
      <Button text="Transfer Money" icon={<MdOutlineCurrencyExchange className="inline"/>} className="text-white text-3xl font-bold bg-GreenBgColor rounded-md p-4 mt-4"/>
    </div>
  )
}

export default TransferMoney

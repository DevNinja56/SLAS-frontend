import React from "react"
import Button from "@components/Common/Button"
import { MdOutlineCurrencyExchange } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io"

const TransferMoney = () => {
  return (
    <div className="bg-DashboardBgColor p-4 rounded-lg">
      <div className="flex gap-4 border-b-2 border-gray-300 pb-8">
        <div className="border-2 border-gray-300 rounded-lg py-4 px-4 bg-white relative">
          <span className="text-sm font-medium ">
            Wallet <br /> Transfer
          </span>
          <IoIosArrowForward className="absolute bottom-0 right-0 bg-OrangeTextColor text-white rounded-tl-lg rounded-br-lg text-xl" />
        </div>
        <div className="border-2 border-gray-300 rounded-lg py-4 px-4 bg-white relative">
          <span className="text-sm font-medium ">
            Transfer <br /> to Other
          </span>
          <IoIosArrowForward className="absolute bottom-0 right-0 bg-OrangeTextColor text-white rounded-tl-lg rounded-br-lg text-xl" />
        </div>
        <div className="border-2 border-gray-300 rounded-lg py-4 px-4 bg-white relative">
          <span className="text-sm font-medium ">
            Self <br /> Transfer
          </span>
          <IoIosArrowForward className="absolute bottom-0 right-0 bg-OrangeTextColor text-white rounded-tl-lg rounded-br-lg text-xl" />
        </div>
      </div>
      <Button
        text="Transfer Money"
        icon={<MdOutlineCurrencyExchange className="inline" />}
        className="text-white text-3xl font-bold bg-GreenBgColor rounded-md p-4 mt-4"
      />
    </div>
  )
}

export default TransferMoney

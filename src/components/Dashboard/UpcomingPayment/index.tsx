import React from "react"
import Button from "@components/Common/Button"

const UpcomingPayment = () => {
  return (
    <div className="flex flex-col gap-4 bg-DashboardBgColor rounded-lg py-4">
      <span className="text-xl text-semibold px-4 font-medium">Upcoming Payments</span>
      <div className="flex gap-6 px-4">
        <div className="flex flex-col gap-2 bg-white border border-gray-300 rounded py-4 px-4 text-center">
          <span className="text-OrangeTextColor font-medium">Credit Card Bill</span>
          <span className="text-GreenBgColor">$580</span>
          <Button text="PAY NOW" className="bg-green-500  text-white p-1 rounded-full" />
        </div>
        <div className="flex flex-col gap-2 bg-white border border-gray-300 rounded py-4 px-4  text-center">
          <span className="text-OrangeTextColor font-medium">Electricity Bill</span>
          <span className="text-GreenBgColor">$780</span>
          <Button text="PAY NOW" className="bg-green-500  text-white p-1 rounded-full" />
        </div>
        <div className="flex flex-col gap-2 bg-white border border-gray-300 rounded py-4 px-4  text-center">
          <span className="text-OrangeTextColor font-medium">Mobile Phone Bill</span>
          <span className="text-GreenBgColor">$580</span>
          <Button text="PAY NOW" className="bg-green-500  text-white p-1 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default UpcomingPayment

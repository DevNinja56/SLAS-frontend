import React from "react"
import DashboardSidebar from "@components/Dashboard/DashboardSidebar"
import Navbar from "@components/Dashboard/Navbar"
import CurrencyLineChart from "@components/LineChart"
import ExchangeRate from "@components/Dashboard/ExchangeRate"
import TransferMoney from "@components/Dashboard/TransferMoney"
import DashboardTable from "@components/Dashboard/Table"
import UpcomingPayment from "@components/Dashboard/UpcomingPayment"
import CurrencyChange from "@components/Dashboard/CurrenecyChange"
import { GoDotFill } from "react-icons/go"
import { IoIosArrowDown } from "react-icons/io"
import { SlCalender } from "react-icons/sl"

const currencyData = [
  { month: "Jan", currency1: 0, currency2: 60 },
  { month: "Feb", currency1: -20, currency2: 54 },
  { month: "Mar", currency1: 45, currency2: 64 },
  { month: "Apr", currency1: 14, currency2: -70 },
  { month: "May", currency1: 80, currency2: 0 },
  { month: "Jun", currency1: -50, currency2: 30 },
  { month: "Jul", currency1: 65, currency2: 40 }
]

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-4 p-4">
        <CurrencyChange />
        <div className="flex bg-sky-100 p-2 flex-col gap-4 rounded-lg w-8/12">
          <div className="flex justify-between">
            <span className="text-xl font-medium">Currency Tracking </span>
            <div className="flex gap-2">
              <p className="flex items-center gap-2 bg-white rounded-md p-1">
                <GoDotFill className="text-blue-400" /> <span className="font-medium text-sm">USD</span>{" "}
                <IoIosArrowDown />
              </p>
              <p className="flex items-center gap-2 bg-white rounded-md p-1">
                <GoDotFill className="text-blue-400" /> <span className="font-medium text-sm">INR</span>{" "}
                <IoIosArrowDown />
              </p>
              <p className="flex items-center gap-2 bg-white rounded-md p-1">
                <SlCalender className="text-blue-400" /> <span className="font-medium text-sm">Jan-2024</span>{" "}
                <IoIosArrowDown />
              </p>
            </div>
          </div>
          <div className="">
            <CurrencyLineChart data={currencyData} />
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4 px-4 ">
        <div className="w-8/12 flex flex-col gap-4">
          <UpcomingPayment />
          <DashboardTable />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <TransferMoney />
          <ExchangeRate />
        </div>
      </div>
    </>
  )
}

export default Dashboard

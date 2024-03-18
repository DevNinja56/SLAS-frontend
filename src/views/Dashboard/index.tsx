import React from "react"
import DashboardSidebar from "@components/Dashboard/DashboardSidebar"
import Navbar from "@components/Dashboard/Navbar"
import CurrencyLineChart from "@components/LineChart"
import ExchangeRate from "@components/Dashboard/ExchangeRate"
import TransferMoney from "@components/Dashboard/TransferMoney"
import DashboardTable from "@components/Dashboard/Table"
import UpcomingPayment from "@components/Dashboard/UpcomingPayment"

const currencyData = [
  { month: "Jan", currency1: 500, currency2: 600 },
  { month: "Feb", currency1: 550, currency2: 620 },
  { month: "Mar", currency1: 600, currency2: 640 },
  { month: "Apr", currency1: 620, currency2: 670 },
  { month: "May", currency1: 650, currency2: 690 },
  { month: "Jun", currency1: 700, currency2: 720 },
  { month: "Jul", currency1: 750, currency2: 740 }
]

const Dashboard = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div>
        <Navbar />
        <div>
          {/* <CurrencyLineChart data={currencyData} /> */}
          {/* <ExchangeRate /> */}
          {/* <TransferMoney /> */}
          <UpcomingPayment />
          <DashboardTable />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

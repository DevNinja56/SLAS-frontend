import React from "react"
import DataTable from "react-data-table-component"
import { TableData } from "./Data"

const DashboardTable = () => {
  const columns = [
    {
      name: "Transaction",
      selector: (row: any) => row.Transaction,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row: any) => row.date
    },
    {
      name: "Time",
      selector: (row: any) => row.time
    },
    {
      name: "Amount",
      selector: (row: any) => row.amount
    },
    {
      name: "Status",
      selector: (row: any) => row.status
    }
  ]
  return (
    <div className="border rounded border-gray-400 p-4">
      <DataTable title="Recent Transactions" columns={columns} data={TableData} />
    </div>
  )
}

export default DashboardTable

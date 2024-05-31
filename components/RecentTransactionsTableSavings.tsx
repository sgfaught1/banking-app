import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { bold } from 'colors'
  
const RecentTransactionsTableSavings = () => {
    return (
        <Table>
      <TableHeader>
        <TableRow  style={{backgroundColor: '#0179fe', textDecoration: 'underline'}}>
          <TableHead className="w-[100px]">Company</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      <TableRow >
          <TableCell className="font-medium">Venmo Deposits</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Direct Deposit</TableCell>
          <TableCell className="text-right" style={{color: 'green'}}>+ $300.00</TableCell>
        </TableRow>
        <TableRow >
          <TableCell className="font-medium">Venmo Deposits</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Direct Deposit</TableCell>
          <TableCell className="text-right" style={{color: 'green'}}>+ $80.00</TableCell>
        </TableRow>
        <TableRow >
          <TableCell className="font-medium">Transfer to Checkings</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Direct Deposit</TableCell>
          <TableCell className="text-right" style={{color: '#e41c38'}}>- $1500.00</TableCell>
        </TableRow>
        <TableRow >
          <TableCell className="font-medium">Venmo Deposits</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Direct Deposit</TableCell>
          <TableCell className="text-right" style={{color: 'green'}}>+ $120.00</TableCell>
        </TableRow>
     
       
      </TableBody>
    </Table>
    
      )
}

export default RecentTransactionsTableSavings
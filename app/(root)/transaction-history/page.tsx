import HeaderBox from '@/components/HeaderBox'
import History from '@/components/History'
import React from 'react'
import RecentTransactionsTable from '@/components/RecentTransactionsTable'
import RecentTransactionsTableSavings from '@/components/RecentTransactionsTableSavings'

const TransactionHistory = () => {
  return (
    <div className='transactions'>
      <div className='transactions-header'>
        <HeaderBox 
        title ="Transaction History"
        subtext='See your bank details and transactions'
        />
      </div>
      <h2 style={{fontSize: '2em'}}>Checkings</h2>
      <RecentTransactionsTable />
      <h2 style={{fontSize: '2em'}}>Savings</h2>
      <RecentTransactionsTableSavings />
       
    </div>
  )
}

export default TransactionHistory
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Link from 'next/link'

import RecentTransactionsTable from './RecentTransactionsTable'
import RecentTransactionsTableSavings from './RecentTransactionsTableSavings'

const RecentTransactions = () => {
  return (
    <section className='recent-transactions'>
        <header className='flex items-center justify-between'>
            <h2 className='recent-transactions-label'>Recent Transactions</h2>
            <Link href={`/transaction-history`} className='view-all-btn'>
                View All
            </Link>
        </header>
        <Tabs defaultValue="checkings" className="w-full">
            <TabsList className='recent-transactions-tablist'>
                <TabsTrigger value="checkings" >Checkings</TabsTrigger>
                <TabsTrigger value="savings">Savings</TabsTrigger>
            </TabsList>
            <TabsContent value="checkings">
                Your recent Checkings account history:
                <RecentTransactionsTable />
            </TabsContent>
            <TabsContent value="savings">
                Your recent Savings history:
                <RecentTransactionsTableSavings />
                </TabsContent>
        </Tabs>

        

    </section>
  )
}

export default RecentTransactions
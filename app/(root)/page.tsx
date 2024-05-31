import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import RecentTransactions from '@/components/RecentTransactions'

const Home = () => {
const loggedIn = {firstName: 'Spencer', lastName: 'Faught', email: 'demo@gmail.com'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type = "greeting" 
          title= "Welcome"
          user = {loggedIn?.firstName || "Guest"}
          subtext = "Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
          accounts = {[]}
          totalBanks = {2}
          totalCurrentBalance = {37500.35}
          />
          
        </header>
        <RecentTransactions />
      </div>

      <RightSidebar 
      user = {loggedIn}
      transactions = {[]}
      banks={[{currentBalance: 12500.35}, {currentBalance: 25000.00}]}/>

    </section>
  )
}

export default Home
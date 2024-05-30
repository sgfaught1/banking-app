import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import RecentTransactions from '@/components/RecentTransactions'

const Home = () => {
const loggedIn = {firstName: 'Spencer', lastName: 'Coder', email: '1234@gmail.com'}

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
          totalBanks = {1}
          totalCurrentBalance = {1250.35}
          />
          
        </header>
        <RecentTransactions />
      </div>

      <RightSidebar 
      user = {loggedIn}
      transactions = {[]}
      banks={[{currentBalance: 123.50}, {currentBalance: 502.68}]}/>

    </section>
  )
}

export default Home
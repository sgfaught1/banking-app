import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox';

// Properly define the types for user and bank data
interface User {
  firstName: string;
  lastName: string;
}

interface Bank {
  $id: string; // Add this property if each bank has an ID
  currentBalance: number;
}

// Initialize your data
let user: User = { firstName: 'Spencer', lastName: 'Faught' };
let transactions: any[] = [];
let banks: Bank[] = [
  { $id: '1', currentBalance: 12500.35 },
  { $id: '2', currentBalance: 25000.00 },
];

const MyBanks = () => {
  return (
    <div>
      
      <div className='transactions'>
            <HeaderBox 
                     type = "greeting" 
                     title= "Welcome"
                     user = {user.firstName || "Guest"}
                     subtext = "View your different cards here!"
                     />
      </div>
      
      {banks?.length > 0 && (
        <div className='relative flex flex-1 flex-col justify-center gap-5'>
        
          <div className='relative left-5 top-30 z-0 w-full'> 
            <BankCard
              key={banks[0].$id}
              account={banks[0]}
              userName={`${user.firstName} ${user.lastName}`}
              showBalance={false}
              lastFour = '1234'
            />
           
          </div> 
          {banks[1] && (
            <div className='relative left-5 top-30 z-0 w-full'>
              <BankCard
                key={banks[1].$id}
                account={banks[1]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
                lastFour = '5678'
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyBanks;
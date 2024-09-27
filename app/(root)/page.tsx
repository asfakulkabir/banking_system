import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const loggedIn={ firstName: 'Asfakul', lastName:"Kabir", email:"asfakul@gmail.com"};

  return (
    <section className='home'>
      <div className='home-content'>
          <header className='home-header'>
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and Manage your account and transactions."
            />

            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500}
            />
          </header>
RECENT TRANSACTIONS
      </div>

      <RightSideBar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:1265.53}, {currentBalance:1545.53}]}
      />
    </section>
  )
}

export default Home
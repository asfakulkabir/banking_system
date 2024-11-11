import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async() => {

  const loggedIn= await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
          <header className='home-header'>
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
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
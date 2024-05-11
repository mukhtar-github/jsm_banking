import React from 'react'
import {HeaderBox, TotalBalanceBox} from '@/components/HeaderBox'

const loggedIn = { firstName: 'Mukhtar'};

const Home = () => {
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account transaction efficiently'
          />

          <TotalBalanceBox />
        </header>
      </div>
    </section>
  )
}

export default Home
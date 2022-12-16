import React from 'react'
import BankInfo from './BankInfo'
import HeaderBankDetails from './HeaderBankDetails'

const BankDetails = () => {
  return (
    <div className='mx-10'>
        <HeaderBankDetails/>
        <BankInfo/>
    </div>
  )
}

export default BankDetails
import React from 'react'
import HeaderSettings from '../HeaderSettings'
import ManagePassword from '../PasswordSettings/ManagePassword'

const PasswordSettings = () => {
  return (
    <div className='mx-10'>
        <HeaderSettings />
        <ManagePassword/>
    </div>
  )
}

export default PasswordSettings
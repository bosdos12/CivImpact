"use"
import { ComplaintsContainerFilterContainer, Header } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='pageContainer'>
      <Header />

      <div className="complaints_container">
        <ComplaintsContainerFilterContainer />
        <div className="complaints_container-complaints_area">

        </div>
      </div>
    </div>
  )
}

export default page
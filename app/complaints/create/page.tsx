import { ComplaintsInputFormContainer, Header } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='pageContainer'>
      <Header activeButtonList={["", "active"]}/>

      <ComplaintsInputFormContainer />
      

    </div>
  )
}

export default page
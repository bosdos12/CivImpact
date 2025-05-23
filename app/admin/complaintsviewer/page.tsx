"use"
import { AdminPageSingleComplaint, ComplaintsContainerFilterContainer, Header } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='pageContainer'>
      <Header activeButtonList={["active", ""]}/>

      <div className="complaints_container">
        <ComplaintsContainerFilterContainer />
        <div className="complaints_container-complaints_area">
          
          <AdminPageSingleComplaint
            complaintTitle='Complaint for abcdefg'
            category='Sherbime Digjitale'
            status='Hapur'
            creationDate='22.05.2025, 21:47'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            votes='100'
          />
          
        </div>
      </div>
    </div>
  )
}

export default page
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
          
          <div className="complaints_container-complaints_area-single_complaint">
            <p className="x-large" style={{
              marginTop: "1rem",
              marginLeft: "1rem",
              marginRight: "1rem"
            }}>Complaint for abcdefg</p>
            <div className="complaints_container-complaints_area-single_complaint-flair_and_timestamp_container">
              <div className="complaints_container-complaints_area-single_complaint-flair_and_timestamp_container-flairs_container">
                <div className="complaints_container-complaints_area-single_complaint-flair_and_timestamp_container-flairs_container-single_flair">
                  <p className="small">Sherbime Digjitale</p>
                </div>

                <div className="complaints_container-complaints_area-single_complaint-flair_and_timestamp_container-flairs_container-single_flair">
                  <p className="small">Hapur</p>
                </div>
              </div>
              <div className="complaints_container-complaints_area-single_complaint-flair_and_timestamp_container-timestamp_container">
                <p className="small">22.05.2025, 21:47</p>
              </div>
            </div>
            <p className="medium" style={{
              marginLeft: "1rem",
              marginTop: "1rem",
              marginRight: "1rem",
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="complaints_container-complaints_area-single_complaint-vote_button">
              <p className="medium" style={{
                marginLeft: "0.5rem"
              }}>
                <i className="fa-regular fa-circle-up"></i> 100
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default page
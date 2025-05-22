import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="header-inputs_container">

        <div className="header-inputs_container-kosovo_seal_container">
          <img src="/kosovoseal.png" alt="" />
        </div>

        <div className="header-inputs_container-single_input active">
          <p className="medium white">Home</p>
        </div>

        <div className="header-inputs_container-single_input">
          <p className="medium white">+ Create Complaint</p>
        </div>
      </div>
    </div>
  )
}

export default Header
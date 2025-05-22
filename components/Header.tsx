import Link from 'next/link'
import React from 'react'

interface Props {
  activeButtonList: Array<string>;
}

const Header = ({
  activeButtonList
}: Props) => {
  return (
    <div className="header">
      <div className="header-inputs_container">

        <div className="header-inputs_container-kosovo_seal_container">
          <img src="/kosovoseal.png" alt="" />
        </div>

        <Link href="/complaints" className={`header-inputs_container-single_input ${activeButtonList[0]}`}>
          <p className="medium white">Home</p>
        </Link>

        <Link href="/complaints/create" className={`header-inputs_container-single_input ${activeButtonList[1]}`}>
          <p className="medium white">+ Create Complaint</p>
        </Link>
      </div>
    </div>
  )
}

export default Header
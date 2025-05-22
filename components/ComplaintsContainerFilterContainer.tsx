"use client"
import React, { useState } from 'react'
import CustomSelect from './CustomSelect'

const ComplaintsContainerFilterContainer = () => {

  const [complaintCategory, setComplaintCategory] = useState("");
  const [complaintStatus, setComplaintStatus] = useState("");

  return (
    <div className="complaints_container-filters_container">

      <p className="small" style={{
        marginLeft: "2rem",
        marginTop: "1rem"
      }}>Category</p>
      <CustomSelect
        value={complaintCategory}
        setValue={setComplaintCategory}
        options={[
          { label: "Sherbime Digjitale", value: "sherbimedigjitale" },
          { label: "Shëndetësi", value: "shendetesi" },
          { label: "Arsim", value: "arsim" },
          { label: "Administratë / Dokumente", value: "administratedokumente" },
          { label: "Transport dhe Infrastruktura", value: "transportdheinfrastruktura" },
          { label: "Mjedisi dhe Pastrimi", value: "mjedisidhepastrimi" },
          { label: "Siguri Publike / Rend", value: "siguripublikerend" },
          { label: "Energji dhe Ujë", value: "energjidheuje" },
          { label: "Të Drejtat e Qytetarëve", value: "tedrejtateqytetareve" },
          { label: "Tjera", value: "tjera" }
        ]}
        placeholder="Zgjedh një Kategori"
      />

      <p className="small" style={{
        marginLeft: "2rem",
        marginTop: "1rem"
      }}>Status</p>
      <CustomSelect
        value={complaintStatus}
        setValue={setComplaintStatus}
        options={[
          { label: "Hapur", value: "hapur" },
          { label: "Në Proces", value: "neproces" },
          { label: "Përgjigjur", value: "pergjigjur" },
          { label: "Përfunduar", value: "perfunduar" },
          { label: "Refuzuar", value: "refuzuar" }
        ]}
        placeholder="Statusi i Ankeses"
      />

      <div className="complaints_container-filters_container-search_button">
        <p className="medium white">Kërko</p>
      </div>

    </div>
  )
}

export default ComplaintsContainerFilterContainer
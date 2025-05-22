"use client"
import React, { useState } from 'react'
import CustomSelect from './CustomSelect';

const ComplaintsInputFormContainer = () => {

  const [complaintCategory, setComplaintCategory] = useState("");
  const [complaintStatus, setComplaintStatus] = useState("");

  return (
    <div className="complaint_input_form_container">

        <p className="x-large" style={{
          marginTop: "2rem",
          marginBottom: "1rem",
          marginLeft: "2rem"
        }}>
          Give Feedback
        </p>

        <p className="small" style={{
          marginLeft: "2rem"
        }}>Title</p>
        <input className="login-area_input complaint_input_form" type="text"/>

        <p className="small" style={{
          marginLeft: "2rem"
        }}>Comment</p>
        <textarea className='login-area_input complaint_input_form' style={{
          resize: "vertical",
          minHeight: "100px"
        }} name="" id=""></textarea>





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

      <div className="complaints_container-filters_container-search_button" style={{
        marginBottom: "2rem"
      }}>
        <p className="medium white">Dërgo</p>
      </div>
    </div>
  )
}

export default ComplaintsInputFormContainer
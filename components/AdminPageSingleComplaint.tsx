import React from 'react'

interface Props {
  complaintTitle: string;
  category: string;
  status: string;
  creationDate: string;
  description: string;
  votes: string;
}

const AdminPageSingleComplaint = ({
  complaintTitle, category, status, creationDate, description, votes
}: Props) => {
  return (
    <div className="complaints_container-complaints_area-single_complaint">
      <p className="x-large" style={{
        marginTop: "1rem",
        marginLeft: "1rem",
        marginRight: "1rem"
      }}>{complaintTitle}</p>
      <div className="complaints_container-complaints_area-single_complaint-flair_and_timestamp_container">
        <div className="complaints_container-complaints_area-single_complaint-flair_and_timestamp_container-flairs_container">
          <div className="complaints_container-complaints_area-single_complaint-flair_and_timestamp_container-flairs_container-single_flair">
            <p className="small">{category}</p>
          </div>

          <div className="complaints_container-complaints_area-single_complaint-flair_and_timestamp_container-flairs_container-single_flair">
            <p className="small">{status}</p>
          </div>
        </div>
        <div className="complaints_container-complaints_area-single_complaint-flair_and_timestamp_container-timestamp_container">
          <p className="small">{creationDate}</p>
        </div>
      </div>
      <p className="medium" style={{
        marginLeft: "1rem",
        marginTop: "1rem",
        marginRight: "1rem",
      }}>
        {description}
      </p>

      <div className="complaints_container-complaints_area-single_complaint-vote_button">
        <p className="medium" style={{
          marginLeft: "0.5rem"
        }}>
          <i className="fa-regular fa-circle-up"></i> {votes}
        </p>
      </div>

      <div className="complaints_container-complaints_area-single_complaint-response_input-container">
        <input type="text" className='complaints_container-complaints_area-single_complaint-response_input' placeholder='Write response...' />

        <div className="complaints_container-complaints_area-single_complaint-response_input-submit_button">
          <p className="medium white">Submit</p>
        </div>
      </div>

      <div className="complaints_container-complaints_area-single_complaint-responses_container">

        <div className="complaints_container-complaints_area-single_complaint-responses_container-single_response_container">
          <p className="medium">Response</p>
          <p className="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        <div className="complaints_container-complaints_area-single_complaint-responses_container-single_response_container">
          <p className="medium">Response</p>
          <p className="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

      </div>
      
    </div>
  )
}

export default AdminPageSingleComplaint
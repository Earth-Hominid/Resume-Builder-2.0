import React, { Component } from 'react';

class Resume extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process form
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstname,
        lastname,
        email,
        phone,
        profile,
        company,
        sector,
        profession,
        professionStartDate,
        professionEndDate,
        institution,
        program,
        educationStartDate,
        educationEndDate,
      },
    } = this.props;
    return (
      <div>
        <div className="resume_holder">
          <ul>
            <h2>PERSONAL DETAILS</h2>
            <div className="line_break"></div>
            <span>Full Name:</span>
            <li>
              {firstname} {lastname}
            </li>
            <span>Email:</span>
            <li>{email}</li>
            <span>Phone:</span>
            <li>{phone}</li>
            <span>Short Bio:</span>
            <li>{profile}</li>
            <br></br>
            <h2>EMPLOYMENT HISTORY</h2>
            <br></br>
            <span>Company / Organisation:</span>
            <li>{company}</li>
            <span>Sector:</span>
            <li>{sector}</li>
            <span>Profession:</span>
            <li>{profession}</li>
            <span>Start Date:</span>
            <li>{professionStartDate}</li>
            <span>End Date:</span>
            <li>{professionEndDate}</li>
            <br></br>
            <h2>EDUCATION</h2>
            <br></br>
            <span>Educational Institution:</span>
            <li>{institution}</li>
            <span>Program:</span>
            <li>{program}</li>
            <span>Start Date:</span>
            <li>{educationStartDate}</li>
            <span>End Date:</span>
            <li>{educationEndDate}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;

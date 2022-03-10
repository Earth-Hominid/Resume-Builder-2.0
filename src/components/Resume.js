const Resume = ({
  nextStep,
  prevStep,
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
  educationCity,
}) => {
  return (
    <div>
      <div className="resume_holder">
        <div className="center">
          <h2 className="fullname">
            {firstname} {lastname}
          </h2>
        </div>
        <div className="email_info">
          <h4 className="phone">
            {phone}, {email}
          </h4>
        </div>
        <br></br>
        <div className="line_break"></div>
        <div className="center">
          <h2 className="section_heading">CAREER PROFILE</h2>
          <p className="bio">{profile}</p>
        </div>
        <div className="line_break"></div>
        <div className="center">
          <h2 className="section_heading">EMPLOYMENT HISTORY</h2>
        </div>
        <div className="career_section">
          <div className="left_justified">
            <h4 className="profession">
              {profession}, {sector}
            </h4>
            <h4 className="company">{company}</h4>
          </div>
          <div className="right_justified">
            <h4 className="date">
              {professionStartDate} to {professionEndDate}
            </h4>
          </div>
        </div>
        <div className="line_break"></div>
        <div className="center">
          <h2 className="section_heading">EDUCATION</h2>
        </div>
        <div className="education_section">
          <div className="program">
            <h4 className="bold_headline">{program}</h4>
          </div>
          <div className="institution">
            <h4 className="regular">
              {institution} - {educationCity}
            </h4>
          </div>
        </div>
      </div>
      <div className="button_holder">
        <input
          id="continue_button"
          type="continue"
          defaultValue="Continue"
          onClick={nextStep}
        ></input>
        <input
          id="back_button"
          type="back"
          defaultValue="Back"
          onClick={prevStep}
        ></input>
      </div>
    </div>
  );
};

export default Resume;

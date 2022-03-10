const School = ({
  nextStep,
  prevStep,
  handleInstitution,
  handleProgram,
  handleEducationCity,
  educationCity,
  institution,
  program,
}) => {
  return (
    <div>
      <div className="main_form_card">
        <form className="education_form">
          <label className="form_text"> Institution:</label>
          <input className="input" onChange={handleInstitution}></input>
          <label className="form_text">Program:</label>
          <input className="input" onChange={handleProgram}></input>
          <label className="form_text">City:</label>
          <input
            onChange={handleEducationCity}
            className="input"
            type="text"
            id="educationCity"
            name="education-city"
          ></input>
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
        </form>
      </div>
    </div>
  );
};

export default School;

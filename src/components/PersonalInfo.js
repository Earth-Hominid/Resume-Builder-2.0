const PersonalInfo = ({
  nextStep,
  prevStep,
  handleFirstname,
  handleLastname,
  handleEmail,
  handlePhone,
  firstname,
  lastname,
  email,
  phone,
}) => {
  return (
    <div className="main_form_card">
      <form className="personal_form">
        <label className="form_text">Name:</label>
        <input
          type="text"
          onChange={handleFirstname}
          id="fname"
          name="firstname"
          className="input"
        ></input>
        <label className="form_text">Surname:</label>
        <input
          className="input"
          type="text"
          onChange={handleLastname}
          id="lname"
          name="lname"
        ></input>
        <label className="form_text">Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleEmail}
          className="input"
        ></input>
        <label className="form_text">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="input"
          placeholder="Country code + City code + Phone number"
          maxLength="255"
          onChange={handlePhone}
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
  );
};

export default PersonalInfo;

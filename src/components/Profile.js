const Profile = ({ nextStep, prevStep, handleProfile, profile }) => {
  return (
    <div>
      <div className="card_header">
        <h2 className="welcome_header">Professional Summary</h2>
      </div>
      <div className="p_center">
        <p>
          Write a professional statement describing your relevant experience,
          skills, and achievements. Tailor the statement to the companies needs
          if possible.
        </p>
      </div>
      <div className="main_form_card">
        <form className="education_form">
          <textarea
            type="text"
            id="professional_summary"
            name="profile"
            className="textarea_input"
            onChange={handleProfile}
          ></textarea>
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

export default Profile;

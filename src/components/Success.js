const Success = ({ prevStep }) => {
  return (
    <div>
      <div className="card_header">
        <h2 className="welcome_header">
          Congratulations, you completed your resume! Click below to print a
          copy.
        </h2>
      </div>
      <div className="welcome_button_holder">
        <button className="welcome_button">Print My Resume</button>
      </div>
      <div className="button_holder_finish">
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

export default Success;

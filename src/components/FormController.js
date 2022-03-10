import { useState } from 'react';
import Nav from './Nav';
import Welcome from './Welcome';
import PersonalInfo from './PersonalInfo';
import Profile from './Profile';
import School from './School';
import Work from './Work';
import './styles.css';
import Resume from './Resume';
import Success from './Success';

function FormController() {
  const [step, setStep] = useState(1);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profile, setProfile] = useState('');
  const [company, setCompany] = useState('');
  const [sector, setSector] = useState('');
  const [profession, setProfession] = useState('');
  const [professionStartDate, setProfessionStartDate] = useState('');
  const [professionEndDate, setProfessionEndDate] = useState('');
  const [institution, setInstitution] = useState('');
  const [program, setProgram] = useState('');
  const [educationCity, setEducationCity] = useState('');

  // Proceed to next step
  const nextStep = () => setStep(step + 1);
  // Go back to prev step
  const prevStep = () => setStep(step - 1);

  // Handle fields change
  const handleFirstnameInput = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameInput = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };

  const handleProfileInput = (e) => {
    setProfile(e.target.value);
  };

  const handleCompanyInput = (e) => {
    setCompany(e.target.value);
  };

  const handleSectorInput = (e) => {
    setSector(e.target.value);
  };

  const handleProfessionInput = (e) => {
    setProfession(e.target.value);
  };

  const handleProfessionStartDateInput = (e) => {
    setProfessionStartDate(e.target.value);
  };

  const handleProfessionEndDateInput = (e) => {
    setProfessionEndDate(e.target.value);
  };

  const handleInstitutionInput = (e) => {
    setInstitution(e.target.value);
  };

  const handleProgramInput = (e) => {
    setProgram(e.target.value);
  };

  const handleEducationCityInput = (e) => {
    setEducationCity(e.target.value);
  };

  switch (step) {
    case 1:
      return (
        <>
          <Nav />
          <Welcome nextStep={nextStep} />
        </>
      );
    case 2:
      return (
        <>
          <Nav />
          <PersonalInfo
            nextStep={nextStep}
            prevStep={prevStep}
            handleFirstname={handleFirstnameInput}
            handleLastname={handleLastnameInput}
            handleEmail={handleEmailInput}
            handlePhone={handlePhoneInput}
          />
        </>
      );
    case 3:
      return (
        <>
          <Nav />
          <Profile
            nextStep={nextStep}
            prevStep={prevStep}
            handleProfile={handleProfileInput}
            profile={profile}
          />
        </>
      );
    case 4:
      return (
        <>
          <Nav />
          <School
            nextStep={nextStep}
            prevStep={prevStep}
            handleInstitution={handleInstitutionInput}
            handleProgram={handleProgramInput}
            handleEducationCity={handleEducationCityInput}
            institution={institution}
            program={program}
            educationCity={educationCity}
          />
        </>
      );
    case 5:
      return (
        <>
          <Nav />
          <Work
            nextStep={nextStep}
            prevStep={prevStep}
            handleSector={handleSectorInput}
            handleProfession={handleProfessionInput}
            handleCompany={handleCompanyInput}
            handleProfessionStartDate={handleProfessionStartDateInput}
            handleProfessionEndDate={handleProfessionEndDateInput}
            company={company}
            sector={sector}
            profession={profession}
            professionStartDate={professionStartDate}
            professionEndDate={setProfessionEndDate}
          />
        </>
      );
    case 6:
      return (
        <>
          <Nav />
          <Resume
            nextStep={nextStep}
            prevStep={prevStep}
            firstname={firstname}
            lastname={lastname}
            email={email}
            phone={phone}
            profile={profile}
            institution={institution}
            program={program}
            educationCity={educationCity}
            company={company}
            sector={sector}
            profession={profession}
            professionStartDate={professionStartDate}
            professionEndDate={professionEndDate}
          />
        </>
      );
    case 7:
      return (
        <>
          <Nav />
          <Success prevStep={prevStep} />
        </>
      );
    default:
      console.log('Resume Builder, built by Earth Hominid, 2021.');
  }
}

export default FormController;

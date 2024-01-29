import "./Phones.scss";
import Phone from "../../assets/Phones.png";
import FadeInSection from "../FadeInSection.jsx";

const Phones = () => {
  return (
    <>
      <div className="phone_wrapper">
        <img className="phone" src={Phone} alt="phone" />
      </div>
      <div className="headline_wrapper">
        <div className="breaker"></div>
        <FadeInSection>
          <p className="phone__title">How the app works</p>
        </FadeInSection>
      </div>
    </>
  );
};

export default Phones;

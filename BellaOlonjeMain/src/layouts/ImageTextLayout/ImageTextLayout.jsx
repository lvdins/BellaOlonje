import PropTypes from "prop-types";
import FadeInSection from "../../components/FadeInSection";
import "./ImageTextLayout.scss";


const ImageTextLayout = ({ imageSrc, text, subtitle, title, isImageOnRight }) => {
  return (
    <div
      id="ImageTextLayout"
      className={     
        isImageOnRight
          ? "image-text-container right"
          : "image-text-container left"
      }
    >
      <div className="image-container">
        <img src={imageSrc} alt="Image" />
      </div>
      <div className="text-container">
        <FadeInSection>
          <h1>{subtitle}</h1>
        </FadeInSection>

        <FadeInSection>
          <h2>{title}</h2>
        </FadeInSection>

        <FadeInSection>
          <h3>{text}</h3>
        </FadeInSection>
      </div>
    </div>
  );
};

ImageTextLayout.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isImageOnRight: PropTypes.bool.isRequired,
};

export default ImageTextLayout;

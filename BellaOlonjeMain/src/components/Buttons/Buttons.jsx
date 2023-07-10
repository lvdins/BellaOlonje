import "../Buttons/Buttons.css";

const Button = ({ text, variant, type }) => {
  return (
    <button
      className={
        variant === "primary" ? "btn__btn-primary" : "btn__btn-secondary"
      }
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;

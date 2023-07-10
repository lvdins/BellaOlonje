import "./Button.css";

const Button = ({ variant, children, onClick }) => {
  const buttonClassName = `button ${variant}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

import { useForm } from "react-hook-form";
import Button from "../../components/Buttons/Buttons";
import "../../pages/Contact/Contact.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="contact-us">
      <form className="contact-us__form" onSubmit={handleSubmit()}>
        <input
          className="contact-us__input"
          placeholder="John Doe"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="contact-us__error">This field is required</span>
        )}

        <input
          className="contact-us__input"
          placeholder="john.doe@mail.com"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="contact-us__error">This field is required</span>
        )}

        <textarea
          className="contact-us__input-area"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="contact-us__error">This field is required</span>
        )}

        <Button variant="primary" type="submit" text="Send" />
      </form>
    </div>
  );
};

export default ContactUs;

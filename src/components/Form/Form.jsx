import "./form.css";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //console.log(errors);
  const onSubmit = () => {
    // console.log(data);
    alert("Form is submitted!");
    // Clear the form values after successful submission
    reset();
  };

  return (
    <div>
      <button className="trial">
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", { required: "First Name cannot be empty" })}
          placeholder={!errors.firstName ? "First Name" : ""}
          className={errors.firstName ? "error" : ""}
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName?.message}</p>
        )}

        <input
          {...register("lastName", { required: "Last Name cannot be empty" })}
          placeholder={!errors.lastName ? "Last Name" : ""}
          className={errors.lastName ? "error" : ""}
        />
        {errors.lastName && (
          <p className="error-message">{errors.lastName?.message}</p>
        )}

        <input
          {...register("email", {
            required: "Looks like this is not an email",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Looks like this is not an email",
            },
          })}
          type="email"
          placeholder={!errors.email ? "Email Address" : "email@example/com"}
          className={errors.email ? "error" : ""}
        />
        {errors.email && (
          <p className="error-message">{errors.email?.message}</p>
        )}

        <input
          {...register("password", {
            required: "Password cannot be empty",
            minLength: { value: 4, message: "Min Length is 4" },
          })}
          placeholder={!errors.password ? "Password" : ""}
          className={errors.password ? "error" : ""}
        />
        {errors.password && (
          <p className="error-message">{errors.password?.message}</p>
        )}

        <button type="submit" className="sub">
          CLAIM YOUR FREE TRIAL
        </button>

        <p className="terms">
          By clicking the button, you are agreeing to our
          <span> Terms and Services</span>
        </p>
      </form>
    </div>
  );
}

export default Form;

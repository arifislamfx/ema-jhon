import React from "react";
import { useForm } from "react-hook-form";
import "./Ship.css";
import { useAuth } from "../Login/useAuth";

const Ship = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const auth = useAuth();

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className={{ textAlign: "center" }}>User Form</h1>
      <input
        name="name"
        defaultValue={auth.user.name}
        ref={register({ required: true })}
        placeholder="Name"
      />
      {errors.name && <span className="errors">Name is required</span>}
      <input
        name="email"
        defaultValue={auth.user.email}
        ref={register({ required: true })}
        placeholder="Email"
      />
      {errors.email && <span className="errors">Email is required</span>}
      <input
        name="AddressLine1"
        ref={register({ required: true })}
        placeholder="Address line 1"
      />
      {errors.AddressLine1 && (
        <span className="errors">Address is required</span>
      )}
      <input name="AddressLine2" ref={register} placeholder="Address line 2" />
      <input
        name="city"
        ref={register({ required: true })}
        placeholder="City"
      />
      {errors.city && <span className="errors">City is required</span>}
      <input
        name="country"
        ref={register({ required: true })}
        placeholder="Country"
      />
      {errors.country && <span className="errors">Country is required</span>}
      <input
        name="zipcode"
        ref={register({ required: true })}
        placeholder="Zip code"
      />
      {errors.zipcode && <span className="errors">Zipcode is required</span>}

      <input className="btn btn-submit" type="submit" />
    </form>
  );
};

export default Ship;

import React from "react";

export default function Form() {
  const messageEl = document.querySelector(".message");

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  // console.log(formData.favColor);

  function handleChange(event) {
    const { name, value, type, checked } = event.target; //destructur

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    messageEl.innerHTML = `
    <h4>Form Data</h4>
    <p>First Name: <span>${formData.firstName}</span></p>
    <p>Last Name: <span>${formData.lastName}</span></p>
    <p>Email: <span>${formData.email}</span></p>
    <p>Comment: <span>${formData.comment}</span></p>
    <p>Is Friendly: <span>${formData.isFriendly}</span></p>
    <p>Employment: <span>${formData.employment}</span></p>
    <p>Favorite Color: <span>${formData.favColor}</span></p>
    `;
    // TOdo:add form validation
  }

  return (
    <div className="container">
      <h1>Form using React</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="inputFields"
          placeholder="First Name"
          type="text"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />

        <input
          className="inputFields"
          placeholder="Last Name"
          type="text"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />

        <input
          className="inputFields"
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <textarea
          className="inputFields"
          placeholder="Comment"
          name="comment"
          onChange={handleChange}
          value={formData.comment}
        />
        <div className="checkbox-el">
          <input
            type="checkbox"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
          />
          <label htmlFor="isFriendly">Are you friendly</label>
        </div>

        <fieldset>
          <legend>Current Employment Status</legend>

          <input
            type="radio"
            id="unemployment"
            name="employment"
            value="unemployment"
            checked={formData.employment === "unemployment"}
            onChange={handleChange}
          />
          <label htmlFor="unemployment">Unemployment</label>

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part Time</label>

          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full Time</label>
        </fieldset>

        <label htmlFor="favColor" className="inputFields">
          What is your favorite color
        </label>

        <select
          className="inputFields"
          id="favColor"
          name="favColor"
          value={formData.favColor}
          onChange={handleChange}
        >
          <option value="">---Choose Color---</option>
          <option value="red">Red</option>
          <option value="yello">Yellow</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
          <option value="black">black</option>
        </select>

        <button className="btn-submit">Submit Form</button>
        <div className="message"></div>
      </form>
    </div>
  );
}

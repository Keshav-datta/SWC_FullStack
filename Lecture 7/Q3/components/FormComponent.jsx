import { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password =
        "Password is required";
    } else if (
      formData.password.length < 8
    ) {
      newErrors.password =
        "Password must be at least 8 characters";
    }

    if (!formData.address.trim()) {
      newErrors.address =
        "Address is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
      validateForm();

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors)
        .length === 0
    ) {
      alert(
        "Form Submitted Successfully"
      );

      setFormData({
        name: "",
        email: "",
        password: "",
        address: "",
      });
    }
  };

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        {errors.name && (
          <span className="error">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && (
          <span className="error">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label>Password</label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {errors.password && (
          <span className="error">
            {errors.password}
          </span>
        )}
      </div>

      <div className="form-group">
        <label>Address</label>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        {errors.address && (
          <span className="error">
            {errors.address}
          </span>
        )}
      </div>

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default FormComponent;

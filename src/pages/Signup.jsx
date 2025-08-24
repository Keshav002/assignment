import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  validateName,
  validateUsername,
  validatePassword,
  validateConfirmPassword,
  validateEmail,
  validatePhone,
} from "../utils/validation";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    const checks = {
      name: validateName(form.name),
      username: validateUsername(form.username),
      password: validatePassword(form.password, form.username),
      confirm: validateConfirmPassword(form.password, form.confirm),
      email: validateEmail(form.email),
      phone: validatePhone(form.phone),
    };

    for (let key in checks) {
      if (checks[key] !== true) newErrors[key] = checks[key];
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/login");
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Create new Account</h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={form.username}
                onChange={(e) => handleChange("username", e.target.value)}
              />
              {errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="input-group">
              <label>Phone No.</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>
          </div>

        
            <div className="input-row">
              <div className="input-group">
                <label>New Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash /> }
                  </span>
                </div>
                {errors.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>

              <div className="input-group">
                <label>Confirm New Password</label>
                <div className="password-wrapper">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={form.confirm}
                    onChange={(e) => handleChange("confirm", e.target.value)}
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {errors.confirm && (
                  <p className="error-text">{errors.confirm}</p>
                )}
              </div>
            </div>
          

          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>

        <div className="form-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

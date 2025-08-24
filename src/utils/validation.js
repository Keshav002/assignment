export function validateName(name) {
  return /^[A-Za-z ]+$/.test(name) || "Name must contain only alphabets";
}

export function validateUsername(username) {
  return /^[A-Za-z0-9@#$%^&+=]+$/.test(username) || "Invalid username format";
}

export function validatePassword(password, username) {
  if (!/^[A-Za-z0-9@#$%^&+=]+$/.test(password)) {
    return "Password must be alphanumeric with special characters";
  }
  if (password === username) {
    return "Password cannot be same as username";
  }
  return true;
}

export function validateConfirmPassword(password, confirm) {
  return password === confirm || "Passwords do not match";
}

export function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email) || "Email must be a valid Gmail address";
}

export function validatePhone(phone) {
  return /^\+\d{1,3}\d{7,12}$/.test(phone) || "Phone must include country code (e.g. +919876543210)";
}

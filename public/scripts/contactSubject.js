function updateSubject(event) {
  const firstNameElement = document.getElementById("first-name");
  const lastNameElement = document.getElementById("last-name");
  const subjectField = document.getElementById("subject");

  if (firstNameElement && lastNameElement && subjectField) {
    const firstName = firstNameElement.value.trim();
    const lastName = lastNameElement.value.trim();
    if (firstName && lastName) {
      subjectField.value = `New Contact from ${firstName} ${lastName}`;
    } else if (firstName) {
      subjectField.value = `New Contact from ${firstName}`;
    }
  }

  return true; // allow form to submit
}

document
  .getElementById("general-contact-form")
  .addEventListener("submit", updateSubject);
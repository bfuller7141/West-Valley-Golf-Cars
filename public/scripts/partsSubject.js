function updateSubject(event) {
  const firstNameElement = document.getElementById("first-name");
  const lastNameElement = document.getElementById("last-name");
  const subjectField = document.getElementById("subject");

  if (firstNameElement && lastNameElement && subjectField) {
    const firstName = firstNameElement.value.trim();
    const lastName = lastNameElement.value.trim();
    if (firstName && lastName) {
      subjectField.value = `New Parts Request from ${firstName} ${lastName}`;
    } else if (firstName) {
      subjectField.value = `New Parts Request from ${firstName}`;
    }
  }

  return true; // allow form to submit
}

document
  .getElementById("parts-form")
  .addEventListener("submit", updateSubject);
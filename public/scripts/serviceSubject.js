function updateSubject(event) {

  const fullNameElement = document.getElementById("name");
  const subjectField = document.getElementById("subject");

  if (fullNameElement && subjectField) {
    const fullName = fullNameElement.value.trim();

    if (fullName) {
      const [firstName, ...rest] = fullName.split(" ");
      const lastName = rest.join(" ");

      // 3) Build the subject line
      const subjectText = lastName
        ? `New Service Request from ${firstName} ${lastName}`
        : `New Service Request from ${firstName}`;

      subjectField.value = subjectText;
    }
  }

  return true;
}

document
  .getElementById("estimate-form")
  .addEventListener("submit", updateSubject);

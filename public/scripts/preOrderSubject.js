(function () {
  const form = document.getElementById("pre-order-form");
  const modelElement = document.getElementById("model");
  const firstNameElement = document.getElementById("first-name");
  const lastNameElement = document.getElementById("last-name");
  const subjectField = document.getElementById("subject");

  // Only apply this subject behavior on the pre-order form.
  if (!form || !modelElement || !subjectField) return;

  form.addEventListener("submit", () => {
    const model = (modelElement.value || "").trim();
    const firstName = firstNameElement ? firstNameElement.value.trim() : "";
    const lastName = lastNameElement ? lastNameElement.value.trim() : "";

    if (firstName && lastName) {
      subjectField.value = `New Pre-Order Request (${model}) from ${firstName} ${lastName}`;
    } else if (firstName) {
      subjectField.value = `New Pre-Order Request (${model}) from ${firstName}`;
    } else {
      subjectField.value = `New Pre-Order Request (${model})`;
    }
  });
})();

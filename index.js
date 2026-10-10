const ageForm = document.getElementById("ageForm");
const ageInput = document.getElementById("ageInput");
const result = document.getElementById("result");

ageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const age = Number(ageInput.value);

    result.className = "";

    if (ageInput.value.trim() === "") {
        showError("Please enter your age.");
    } 
    else if (!Number.isInteger(age)) {
        showError("Please enter a whole number.");
    } 
    else if (age < 0 || age > 120) {
        showError("Age must be between 0 and 120.");
    } 
    else if (age <= 12) {
        showSuccess("You are a child.");
    } 
    else if (age <= 19) {
        showSuccess("You are a teenager.");
    } 
    else if (age <= 59) {
        showSuccess("You are an adult.");
    } 
    else {
        showSuccess("You are an old person.");
    }
});

function showSuccess(message) {
    result.textContent = message;
    result.className = "success";
}

function showError(message) {
    result.textContent = message;
    result.className = "error";
}

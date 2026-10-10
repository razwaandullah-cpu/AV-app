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
    else if (age < 0) {
        showError("Age cannot be negative.");
    } 
    else if (age > 120) {
        showError("You should be dead by now.");
    } 
    else if (age < 18) {
        const yearsLeft = 18 - age;
        const yearWord = yearsLeft === 1 ? "year" : "years";

        showError(
            `You are not up to the required age. Come back in the next ${yearsLeft} ${yearWord}.`
        );
    } 
    else {
        showSuccess("You meet up with the age requirement.");
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
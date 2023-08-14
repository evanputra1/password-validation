// Menyeleksi elemen
const passwordInput = document.querySelector(".password input");
const eyeIcon = document.querySelector(".password i");
const requireList = document.querySelectorAll(".require-list li");

// Sebuah array persyaratan password dengan sesuai
// Standar expression dan indeks daftar persyaratan item
const requirement = [
    { regex: /.{8,}/, index: 0 }, //At least 8 characters length
    { regex: /[0-9]/, index: 1 }, //At least 1 number
    { regex: /[a-z]/, index: 2 }, //At least 1 lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, //At least 1 special symbol
    { regex: /[A-Z]/, index: 4 }, //At least 1 uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
    requirement.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requireList[item.index];

        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});
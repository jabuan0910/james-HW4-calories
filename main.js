function toggleSection(section) {
    // Disable all sections
    document.getElementById("section1").disabled = true;
    document.getElementById("section2").disabled = true;
    document.getElementById("section3").disabled = true;

    document.getElementById("section1").classList.add("disabled");
    document.getElementById("section2").classList.add("disabled");
    document.getElementById("section3").classList.add("disabled");

    // Enable the selected section
    if (section === 1) {
        document.getElementById("section2").disabled = false;
        document.getElementById("section2").classList.remove("disabled");
    } else if (section === 2) {
        document.getElementById("section3").disabled = false;
        document.getElementById("section3").classList.remove("disabled");
    }
}

function registerUser() {
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);

    alert("Welcome " + username);
}

function loginUser() {
    const username = document.getElementById("existingUsername").value;
    const password = document.getElementById("existingPassword").value;

    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
        alert("Welcome back " + username);
    } else {
        alert("Invalid");
    }
}

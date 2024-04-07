function addPassword() {
    var websiteInput = document.querySelector('input[placeholder="website"]');
    var usernameInput = document.querySelector('input[placeholder="username"]');
    var passwordInput = document.querySelector('input[placeholder="password"]');
    var passwordList = document.getElementById("passwordList");

    var website = websiteInput.value.trim();
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    if (website && username && password) {
        var passwordItem = document.createElement("li");
        passwordItem.textContent = `Website: ${website}, Username: ${username}, Password: ${password}`;

        passwordList.appendChild(passwordItem);

        websiteInput.value = "";
        usernameInput.value = "";
        passwordInput.value = "";
    } else {
        alert("Please fill in all fields.");
    }
}

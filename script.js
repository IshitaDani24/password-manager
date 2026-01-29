// Load passwords when page loads
window.onload = loadPasswords;

function savePassword() {
  let website = document.getElementById("website").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (website === "" || username === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  let passwords = JSON.parse(localStorage.getItem("passwords")) || [];

  passwords.push({ website, username, password });

  localStorage.setItem("passwords", JSON.stringify(passwords));

  document.getElementById("website").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  loadPasswords();
}

function loadPasswords() {
  let passwordList = document.getElementById("passwordList");
  passwordList.innerHTML = "";

  let passwords = JSON.parse(localStorage.getItem("passwords")) || [];

  passwords.forEach((item, index) => {
    let row = `
      <tr>
        <td>${item.website}</td>
        <td>${item.username}</td>
        <td>${item.password}</td>
        <td>
          <button class="delete-btn" onclick="deletePassword(${index})">
            Delete
          </button>
        </td>
      </tr>
    `;
    passwordList.innerHTML += row;
  });
}

function deletePassword(index) {
  let passwords = JSON.parse(localStorage.getItem("passwords")) || [];
  passwords.splice(index, 1);
  localStorage.setItem("passwords", JSON.stringify(passwords));
  loadPasswords();
}

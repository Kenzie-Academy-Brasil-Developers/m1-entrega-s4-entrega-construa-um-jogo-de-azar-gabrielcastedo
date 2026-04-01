const input = document.getElementById("input-username");
const button = document.querySelector(".send-name-button");

button.addEventListener("click", () => {
  const username = input.value.trim();
  console.log("Username:", username);
  sessionStorage.setItem("username", username);
  const storedUsername = sessionStorage.getItem("username");
  console.log("Stored Username:", storedUsername);
});


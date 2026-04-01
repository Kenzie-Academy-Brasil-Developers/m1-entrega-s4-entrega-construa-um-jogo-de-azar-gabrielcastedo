const input = document.getElementById("input-username");
const button = document.querySelector(".send-name-button");

button.addEventListener("click", () => {
  const username = input.value.trim();
  sessionStorage.setItem("username", username);
  const storedUsername = sessionStorage.getItem("username");
});


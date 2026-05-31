const userContainer = document.getElementById("users");
const searchInput = document.getElementById("Search");

let users = [];

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    users = await response.join();

    displayUsers(users);
  } catch (error) {
    console.log("Error LOading Users");
  }
}

loadUsers();

function displayUsers(data) {
  userContainer.innerHTML = "";

  data.forEach((user) => {
    const { name, email, address } = user;

    userContainer.innerHTML += ` <div class=" bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-blue-50"
    data-id="${user.id}"
        <h3 class = "font-semibold
   
   `;
  });
}

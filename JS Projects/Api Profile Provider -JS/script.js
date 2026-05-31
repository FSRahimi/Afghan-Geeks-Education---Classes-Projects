async function getProfile() {
  const response = await fetch("https://randomuser.me/api/");

  const date = await response.json();

  console.log("response");

  const user = date.results[0];
  document.getElementById("profile").innerHTML = `
    <img src =" ${user.picture.large}">
    <h2>${user.name.first} ${user.name.last}</h2>
    <P> ${user.email}</p>
    <p> ${user.phone}</p>
    `;
}

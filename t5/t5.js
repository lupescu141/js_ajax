// your code here
const dialog = document.querySelector("dialog");
const table = document.getElementById("rTable");
const restaurantInfo = document.getElementById("restaurantInfo");
const menu = document.getElementById("menu");

async function post() {
  try {
    const url =
      "https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const restaurants = await fetch(url, options);
    const result = await restaurants.json();
    console.log(restaurants);
    console.log(result);
    return result;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function exitModal() {
  dialog.close();
  restaurantInfo.textContent = "";
  menu.textContent = "";
}

async function highlightName(element) {
  const highlighted = document.querySelectorAll(".namedHighlights");
  const restaurants = await post();

  highlighted.forEach((rname) => {
    rname.classList.remove("namedHighlights");
  });

  const classList = element.classList;
  classList.add("namedHighlights");

  const foundObject = restaurants.find(
    ({ name }) => name === element.parentNode.children[0].innerText
  );

  try {
    const url = `https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${foundObject._id}/fi`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const restaurants = await fetch(url, options);
    const result = await restaurants.json();
    console.log(restaurants);
    console.log(result);

    menu.insertAdjacentHTML("beforeend", `<tr><th><h1>Menu:</h1></th>`);

    result.courses.forEach((element) => {
      menu.insertAdjacentHTML(
        "beforeend",
        `<tr><th>Name: ${element.name}</th><th>Price: ${element.price}</th></tr>`
      );
    });

    menu.insertAdjacentHTML(
      "beforeend",
      `<button onClick = "exitModal()">exit</button>`
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }

  restaurantInfo.insertAdjacentHTML(
    "beforeend",
    `<p>Name: ${foundObject.name}</p>
     <p><th>Adress: ${foundObject.address}</p>
     <p>Postal code: ${foundObject.postalCode}<p>
     <p>City: ${foundObject.city}<p>
     <p>Phone number: ${foundObject.phone}<p>
     <p>Company: ${foundObject.company}<p>`
  );

  dialog.showModal();
}

async function main() {
  const restaurants = await post();

  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  restaurants.forEach((element) => {
    table.insertAdjacentHTML(
      "beforeend",
      `<tr><th onClick= "highlightName(this)">${element.name}</th><th>${element.address}</th></tr>`
    );
  });
}

main();

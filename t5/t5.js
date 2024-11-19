// your code here
import { restaurantModal, restaurantRow, filterRows } from "./components.js";
import { fetchData } from "./utils.js";
import { baseUrl, dialog, table, restaurantInfo, menu } from "./variables.js";

window.exitModal = () => {
  dialog.close();
  restaurantInfo.textContent = "";
  menu.textContent = "";
};

window.highlightName = async (element) => {
  const highlighted = document.querySelectorAll(".namedHighlights");
  const restaurants = await fetchData();

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

    menu.innerHTML = restaurantModal(foundObject, result);
  } catch (error) {
    console.error("An error occurred:", error);
  }

  dialog.showModal();
};

const main = async () => {
  const restaurants = await fetchData(baseUrl);

  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  restaurants.forEach((element) => {
    table.appendChild(restaurantRow(element));
  });

  document
    .getElementById("button_all")
    .addEventListener("click", () => filterRows("", restaurants, table));
  document
    .getElementById("button_sodexo")
    .addEventListener("click", () => filterRows("Sodexo", restaurants, table));
  document
    .getElementById("button_compass")
    .addEventListener("click", () =>
      filterRows("Compass Group", restaurants, table)
    );
};

main();

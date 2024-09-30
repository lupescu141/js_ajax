const restaurantRow = (restaurant) => {
  const { name, company } = restaurant;
  const tableRow = document.createElement("TR");
  tableRow.innerHTML = `<td>${name}</td><td>${company}</td>`;

  return tableRow;
};

const restaurantModal = (restaurant, menu) => {
  const { name, adsress, postalCode } = restaurant;
  const { courses } = menu;
  let menuHtml = `<h1>${name} </h1> <p>Adress: ${adsress}</p> <p>Postal code: ${postalCode}</p>`;

  courses.array.forEach((element) => {
    menuHtml.concat(
      `<p>Name: ${element.name}</p>`,
      `<p>Price: ${element.price} </p>`
    );
  });

  return menuHtml;
};

export { restaurantRow, restaurantModal };

const restaurantRow = (restaurant) => {
  console.log(restaurant);
  const { name, address } = restaurant;
  console.log(name);
  const tableRow = document.createElement("TR");
  tableRow.innerHTML = `<th onClick= "highlightName(this)">${name}</th><th >${address}</th>`;
  console.log(tableRow);
  return tableRow;
};

const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;
  const { courses } = menu;
  let menuHtml = `
    <tr><th><h1>${name}</h1></th></tr>
     <tr><th>Adress: ${address}</th></tr>
     <tr><th>Postal code: ${postalCode}</th></tr>
     <tr><th>City: ${city}</th></tr>
     <tr><th>Phone number: ${phone}</th></tr>
     <tr><th>Company: ${company}</th></tr>
     <tr><th><h1>Menu:</h1></th></tr>`;

  courses.forEach((element) => {
    menuHtml = menuHtml.concat(
      `<tr><th>Name: ${element.name}</th><th>Price: ${element.price}</th></tr>`
    );
  });

  menuHtml = menuHtml.concat(`<button onClick = "exitModal()">exit</button>`);

  return menuHtml;
};

export { restaurantRow, restaurantModal };

import { baseUrl } from "./variables.js";

const fetchData = async (url) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(url);
    const restaurants = await fetch(baseUrl, options);
    const result = await restaurants.json();
    console.log(restaurants);
    console.log(result);
    return result;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

export { fetchData };

import api from "./api.js";

const recipeListElement = document.querySelector(".recipe-list");
const formElement = document.querySelector("form");
const inputFormElement = document.querySelector("input");

let searchValue = "";

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  searchValue = inputFormElement.value;

  console.log("searchValue :>> ", searchValue);

  let query = {
    value: searchValue,
  };

  api(query);
});

import fetchApi from "./api.js";

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

  fetchApi(query);
});

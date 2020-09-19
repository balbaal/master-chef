const RAPIDAPI_HOST = "recipe-puppy.p.rapidapi.com";
const RAPIDAPI_KEY = "2ffb3f10a6mshfdddfd1ff72ce7bp15505cjsn16251b9a3f4c";
const object = {
  method: "GET",
  headers: {
    "x-rapidapi-host": RAPIDAPI_HOST,
    "x-rapidapi-key": RAPIDAPI_KEY,
  },
};

const api = async (query) => {
  console.log("query :>> ", query);

  const recipeListElement = document.querySelector(".recipe-list");
  let templateCard = "";

  try {
    const resRecipeJSON = await fetch(
      `https://${RAPIDAPI_HOST}/?p=1&i=&q=${query.value}`,
      object
    );

    const resRecipe = await resRecipeJSON.json();
    console.log("resRecipe :>> ", resRecipe.results);

    if (resRecipe.results.length > 0) {
      resRecipe.results.forEach((item, i) => {
        templateCard += `
          <div class="recipe-list__card">
            <figure class="recipe-list__card__figure">
              <img
                class="recipe-list__card__figure__img"
                src=${
                  !!item.thumbnail
                    ? item.thumbnail
                    : "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1035&q=80"
                }
                alt="recipe-image"
              />
            </figure>
  
            <div class="recipe-list__card__content">
              <h3 class="recipe-list__card__content__recipe-name">
                ${item.title}
              </h3>
              <div class="recipe-list__card__content__info">
                <p class="recipe-list__card__content__info__rating">
                  <i class="fa fa-star-o"></i>4.7 (23)
                </p>
                <p class="recipe-list__card__content__info__chef">
                  by RENATTA MOELOEK
                </p>
              </div>
            </div>
          </div>
        `;

        recipeListElement.innerHTML = templateCard;
      });
    } else {
      recipeListElement.innerHTML = `<h1 class="recipe-list__not-found"><span>${query.value}</span> not found !!!</h1>`;
    }
  } catch (error) {
    console.log("error :>> ", error);
    recipeListElement.innerHTML = `<h1 class="recipe-list__error">Something wrong !!!</h1>`;
  }
};

export default api;

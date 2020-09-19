const api = async (query) => {
  console.log("query :>> ", query);

  try {
    const resRecipeJSON = await fetch(
      `https://recipe-puppy.p.rapidapi.com/?p=1&i=&q=${query.value}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
          "x-rapidapi-key":
            "2ffb3f10a6mshfdddfd1ff72ce7bp15505cjsn16251b9a3f4c",
        },
      }
    );

    const resRecipe = await resRecipeJSON.json();
    console.log("resRecipe :>> ", resRecipe);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export default api;

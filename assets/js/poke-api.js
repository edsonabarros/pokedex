
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => { //
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
  .then((response) => response.json()) //function escrita de forma mais simples
  .then((jsonBody) => jsonBody.results) //é possível utilizar várions thens
  .catch((error) => console.error(error));


}
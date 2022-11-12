const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


/*Pedir um get - retorna um response*/
fetch(url).then(function(response){
  console.log(response);
})
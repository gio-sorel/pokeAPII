const log = console.log;

async function getPokemonData(param) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${param}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        /* log(data); */

        displayPokemonCard(data);
    } catch (error){
        console.log("Error al obtener datos: ", error);
    }
}

function displayPokemonCard(data) {
    const displayPokemonConteiner = document.getElementById("pokemonCardContainer");


    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    const pokemonName = document.createElement("h3");
    pokemonName.classList.add = data.name;

    const pokemonType = document.createElement("p");
    pokemonCard.classList.add = `Types: ${data.types.map(type=>type.type.name).join(", ")}`;

    //Elementos
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonType);

    pokemoncardConteiner.innerHTML = "";
    pokemoncardConteiner.appendChild(pokemonCard);
}



function searchrandomPokemon() {
    const randomID = Math.floor(Math.random() * 150) + 1;
    getPokemonData(randomID);
}

function searchrandomByName() {
    const pokemonName = document.getElementById("pokemonNameInput").value;
    getPokemonData(randomName);
}
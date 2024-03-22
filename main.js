const log = console.log;

async function getPokemonData(param) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${param}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        /* log(data); */

        displayPokemonCard(data);
    } catch (error){
        log("Error al obtener datos: ", error);
    }
}

function displayPokemonCard(data) {
    const PokemonConteiner = document.getElementById("pokemonCardContainer");


    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    const pokemonImage = document.createElement("img");
    pokemonImage.src=data.sprites.front_default;

    const pokemonName = document.createElement("h2");
    pokemonName.textContent = data.name;

    const pokemonAbilities = document.createElement("p");
    pokemonAbilities.textContent = `Abilities: ${data.abilities.map(ability => ability.ability.name).join(", ")}`;

    const pokemonTypes = document.createElement("p");
    pokemonCard.classList.add = `Types: ${data.types.map(type=>type.type.name).join(", ")}`;

    //Elementos
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonAbilities);
    pokemonCard.appendChild(pokemonTypes);

    PokemonConteiner.innerHTML = "";
    PokemonConteiner.appendChild(pokemonCard);
}



function searchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 150) + 1;
    getPokemonData(randomId);
}

function searchPokemonByName() {
    const pokemonName = document.getElementById("pokemonNameInput").value;
    getPokemonData(pokemonName);
}

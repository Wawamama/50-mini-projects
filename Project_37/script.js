const container = document.querySelector('.container')
const POKE_LIMIT = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
}

const typesArray = Object.keys(colors)

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const IMG_URL = 'https://pokeres.bastionbot.org/images/pokemon/'

async function fetchPokemons() {
    for (let i=1; i<POKE_LIMIT; i++) {
        await getPokemon(i)  
    }
}

async function getPokemon(id) {
    try {
        const { data } = res = await axios.get(API_URL + id)
        await createCard(data)
    } catch(err) {
        console.log(err)
    }
}

function createCard(pokemon) {
    const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const typesNames = pokemon.types.map(type => type.type.name) // array with just the types of the pokemon
    
    const type = typesArray.find(type => type === typesNames[0] )

 
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.backgroundColor = colors[type]
    card.innerHTML = `
    <div class="picture">
        <img src="${IMG_URL + pokemon.id}.png" alt="">
    </div>
    <div class="id">#${id}</div>
    <div class="name">${pokemonName}</div>
    <div class="type">Type: ${type}</div>
    `
    container.appendChild(card) 
}

fetchPokemons()
// TEST IN CONSOLE
//getPokemon(10);


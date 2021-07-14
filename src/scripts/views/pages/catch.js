import CatchPokemonIdb from '../../data/catchpokemon-idb';
import {createPokemonCatchTemplate} from '../templates/template-creator';

const Catch = {
    async render(){
        return `<h2 class = "text-white text-center">Catched Pokemon</h2>`
    },
    async afterRender(){
        const pokemons = await CatchPokemonIdb.getAllPokemon();
        const pokemonsContainer = document.getElementById('main_element');
        pokemons.forEach(pokemon => {
            pokemonsContainer.innerHTML += createPokemonCatchTemplate(pokemon);
          });    
    },

}

export default Catch;
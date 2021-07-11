import PokedexSource from "../../data/pokedex-source";
import {createPokemonItemTemplate} from '../templates/template-creator';
const Gen1 = {
    async render() {
        return `<h2 class = "text-white text-center">Gen 1 Pages</h2>`
    },

    async afterRender(){
       const pokemons = await PokedexSource.getGen1();
       console.log(pokemons);
       const pokemonsContainer = document.getElementById('main_element');
       pokemons.forEach(pokemon => {
        pokemonsContainer.innerHTML += createPokemonItemTemplate(pokemon);
      });
    
    
     
    },
};

export default Gen1;
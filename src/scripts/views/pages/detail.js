import UrlParser from '../../routes/url-parser';
import PokedexSource from "../../data/pokedex-source";
import { createPokemonDetailTemplate } from "../templates/template-creator";
const Detail = {
    async render() {
        return `<h2>Detail Pages</h2>`
    },

    async afterRender(){
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const pokemon = await PokedexSource.getDetailPokemon(url.id);
        console.log(pokemon)
        const pokemonContainer = document.getElementById('main_element');
        pokemonContainer.innerHTML = createPokemonDetailTemplate(pokemon);
    },
};

export default Detail;
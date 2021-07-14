import UrlParser from '../../routes/url-parser';
import PokedexSource from "../../data/pokedex-source";
import { createPokemonDetailTemplate} from "../templates/template-creator";
import CatchButtonInitiator from '../../utils/catch-button-initiator';
const Detail = {
    async render() {
        return `
        <h2>Detail Pages</h2>
        <div id="catchButtonContainer"></div>
        `
    },

    async afterRender(){
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const pokemon = await PokedexSource.getDetailPokemon(url.id);
        const pokemonContainer = document.getElementById('main_element');
        pokemonContainer.innerHTML += createPokemonDetailTemplate(pokemon);
        CatchButtonInitiator.init({
            catchButtonContainer: document.querySelector('#catchButtonContainer'),
            pokemon : pokemon
        });
    },
};

export default Detail;
import CatchPokemonIdb from '../data/catchpokemon-idb';
import {createCatchButtonTemplate, createReleaseButtonTemplate} from '../views/templates/template-creator';

const CatchButtonInitiator = {
    async init({catchButtonContainer, pokemon}){
        this._catchButtonContainer = catchButtonContainer;
        this._pokemon = pokemon;
        await this._renderButton();
    },

    async _renderButton(){
        const {id} = this._pokemon;
        if(await this._isPokemonExist(id)){
            this._renderRelease();
        }else{
            this._renderCatch();
        }
    },

    async _isPokemonExist(id){
        const pokemon = await CatchPokemonIdb.getPokemon(id);
        return !!pokemon;
    },

    async _renderCatch(){
        this._catchButtonContainer.innerHTML = createCatchButtonTemplate();
        const catchButton = document.querySelector('#catchButton');
        catchButton.addEventListener('click', async () =>{
            console.log(this._pokemon);
            await CatchPokemonIdb.putPokemon(this._pokemon);
            this._renderButton();
        });
    },

    async _renderRelease(){
        this._catchButtonContainer.innerHTML = createReleaseButtonTemplate();
        const catchButton = document.querySelector('#catchButton');
        catchButton.addEventListener('click', async () =>{
            console.log("Click release");
            await CatchPokemonIdb.deletePokemon(this._pokemon.id);
            this._renderButton();
        });
    },

};

export default CatchButtonInitiator;

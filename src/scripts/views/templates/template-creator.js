import CONFIG from '../../globals/config';



const createPokemonCatchTemplate = (pokemon) => `
<div class = "col-md-4 col-lg-4 col-sm-12 mt-3"> 
<div class="card mb-3 mx-auto" >
    <img class="card-img-top p-5" src="${(CONFIG.BASE_IMAGE_URL + pokemon.id)}.png"/>
        <div class="card-body text-center">
            <h5 class="card-title text-capitalize">${pokemon.name}</h5>
            <a href="#/detail/${pokemon.id}">
            <div class="d-grid gap-2">
                    <button class="btn custom-button-white" type="button">
                        Detail
                    </button>
            </div>
            </a>
        </div>
</div>
</div>
`;


const createPokemonItemTemplate = (pokemon) => 
`
<div class = "col-md-4 col-lg-4 col-sm-12 mt-3"> 
    <div class="card mb-3 mx-auto" >
        <img class="card-img-top p-5" src="${(CONFIG.BASE_IMAGE_URL + getPokemonId(pokemon))}.png"/>
            <div class="card-body text-center">
                <h5 class="card-title text-capitalize">${pokemon.name}</h5>
                <a href="#/detail/${getPokemonId(pokemon)}">
                <div class="d-grid gap-2">
                        <button class="btn custom-button-white" type="button">
                            Detail
                        </button>
                </div>
                </a>
            </div>
    </div>
</div>
`;

const createPokemonDetailTemplate = (pokemon) => 
`
    <div class="card bg-danger text-white  mb-3" >
        <div class="row g-0">
            <div class="col-md-4">
                <img src ="${(CONFIG.BASE_IMAGE_URL + pokemon.id)}.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <p class="card-title mt-5 h1 text-capitalize">${pokemon.name}</p>
                <p class="card-text h4 mt-3 text-capitalize">Type : ${getPokemonType(pokemon)}</p>
                <p class="card-text h4 mt-3">Weight : ${pokemon.weight}</p>
                </div>
            </div>
        </div>
    </div> 
`;

const createCatchButtonTemplate = () => `
  <button aria-label="like this movie" id="catchButton" class="catch">
        Catch
  </button>
`;
 
const createReleaseButtonTemplate = () => `
  <button aria-label="unlike this movie" id="catchButton" class="catch">
    Release
  </button>
`;

 
const getPokemonId = (pokemon) =>{
    return pokemon.url.split('/')[6];
}

const getPokemonType = (pokemon) =>{
    let typeString = '';
    pokemon.types.forEach(type => {
        typeString += type.type.name + ' , ';
    });
    return typeString;
}

export {
    createPokemonCatchTemplate,
    createPokemonItemTemplate, 
    createPokemonDetailTemplate,
    createReleaseButtonTemplate,
    createCatchButtonTemplate
    };


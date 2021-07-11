import API_ENDPOINT from "../globals/api-endpoint";

class PokedexSource{
    static async getGen1(){
        const response = await fetch(API_ENDPOINT.GEN_1);
        const responseJson = await response.json();
        
        return responseJson.results;
        
    }

  

    static async getGen2(){
        const response = await fetch(API_ENDPOINT.GEN_2);
        const responseJson = await response.json();
        return responseJson.results;
    }

    static async getGen3(){
        const response = await fetch(API_ENDPOINT.GEN_3);
        const responseJson = await response.json();
        return responseJson.results;
    }

    static async getDetailPokemon(id){
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        console.log(response);
        return response.json();
    }
}

export default PokedexSource;
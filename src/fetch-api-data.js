
export function pokemonsList(limit,offset){
    const data = fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {
        method: "GET",
    })
    .then(response => response.json())
    .then((response) => {
        //console.log(response);
        return response.results;
    })
    .catch(error => {
        console.log('Error fetching Pokémon list:', error);
    });
    
    return data;
}

export function pokemonInfo(url){
    const data = fetch(url, {
        method: "GET",
    })
    .then(response => response.json())
    .then((response) => {
        //console.log(response);
        return response;
    })
    .catch(error => {
        console.log('Error fetching Pokémon info:', error);
        return null;  // Return null so other requests continue
    });
    
    return data;
}

export function pokemonMoves(id){
    const data = fetch(`https://pokeapi.co/api/v2/move/${id}/`, {
        method: "GET",
    })
    .then(response => response.json())
    .then((response) => {
        //console.log(response);
        return response;
    })
    .catch(error => {
        console.log(error);
    });
    
    return data;
}

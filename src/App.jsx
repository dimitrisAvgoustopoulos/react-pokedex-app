import { useEffect, useState } from 'react';

import { pokemonsList, pokemonInfo } from './fetch-api-data';
import pokeball from './assets/pokeball.png';

import PokemonCard from './components/PokemonCard';
import Filters from './components/Filters/Filters';
import Loader from './components/Loader';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedType, setSelectedType] = useState('Select Type');
  const [searchName, setSearchName] = useState('');
  

  useEffect(() => {
    pokemonsList(500, 0).then(async (data) => { // Initial fetch with a limit of 500
      const pokemonsPlusType = await Promise.all(data.map(async (pokemon) => {
        const details = await pokemonInfo(pokemon.url); // Fetch details for each Pokémon
        return details ? { ...pokemon, types: details.types } : null;
      }));
      setPokemons(pokemonsPlusType);
      setFilteredPokemons(pokemonsPlusType);
    });

  }, []); 

  const pokemonFiltering = (name, type) => {
    let filtered = pokemons;

    if (type !== 'Select Type') {
      filtered = filtered.filter(pokemon =>
        pokemon.types.some(t => t.type.name.toLowerCase() === type.toLowerCase())
      );
    }

    if (name) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    setFilteredPokemons(filtered);
  };

  const handleNameSearch = (name) => {
    setSearchName(name);
    pokemonFiltering(name, selectedType);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    pokemonFiltering(searchName, type);
  };

  const handleAPIFilters = (displayedPokemons, offsetNum) => {
    pokemonsList(displayedPokemons, offsetNum).then(async (data) => {
      const pokemonsPlusType = await Promise.all(data.map(async (pokemon) => {
        const details = await pokemonInfo(pokemon.url);
        return details ? { ...pokemon, types: details.types } : null;
      }));
      setPokemons(pokemonsPlusType);
      setFilteredPokemons(pokemonsPlusType);
    });
  };

  return (
    <>
      <Filters
        keyvalue={pokemons}
        handleNameSearch={handleNameSearch}
        handleTypeFilter={handleTypeFilter}
        onHandleFilters={handleAPIFilters} 
      />
      {pokemons.length === 0 ? (
         <Loader className={"mb-72"}/>
        ) : filteredPokemons.length > 0 ? (
          <div className='rounded-xl w-11/12 mx-auto mb-20 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-10'>
            {filteredPokemons.map((pokemon) => pokemon ? (
                <PokemonCard key={pokemon.url} pokeUrl={pokemon.url} />
              ): <img src={pokeball} />
            )}
          </div>
        ) : (
          <p className='text-center text-5xl text-white font-bold mb-72'>No Pokémon found...</p>
        )
      }
    </>
  );
}

export default App;

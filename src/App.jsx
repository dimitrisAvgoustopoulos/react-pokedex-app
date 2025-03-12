import { useEffect, useState } from 'react';

import { pokemonsList } from './fetch-api-data';

import PokemonCard from './components/PokemonCard';
import Filters from './components/Filters/Filters';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    pokemonsList(500, 0).then(data => { // Initial fetch with a limit of 500
      setPokemons(data);
      setFilteredPokemons(data);
    });

  }, []); 

  const handleNameSearch = (name) => {
    const searched = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredPokemons(searched);
  };

  const handleAPIFilters = (displayedPokemons=500, offsetNum=0) => {
    pokemonsList(displayedPokemons, offsetNum).then(data => {
      setPokemons(data);
      setFilteredPokemons(data);
    });
  };

  return (
    <>
      <Filters 
        handleNameSearch={handleNameSearch} 
        onHandleFilters={handleAPIFilters} 
      />
      {pokemons.length === 0 ? (
          <p className='text-center text-5xl text-white font-bold mb-72'>Loading..</p>
        ) : filteredPokemons.length > 0 ? (
          <div className='rounded-xl w-11/12 mx-auto mb-20 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-10'>
            {filteredPokemons.map((pokemon) => (
              <PokemonCard key={pokemon.url} pokeUrl={pokemon.url} />
            ))}
          </div>
        ) : (
          <p className='text-center text-5xl text-white font-bold mb-72'>No Pokémon found...</p>
        )
      }
    </>
  );
}

export default App;
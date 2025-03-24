import { useState, useEffect, useRef } from "react"
import { pokemonInfo } from "../fetch-api-data"

import PokeInfoModal from "./PokemonModal/PokeInfoModal";
import Loader from "./Loader";

export default function PokemonCard({ pokeUrl }) {

  const [pokemon, setPokemon] = useState({})
  const modal = useRef();

  useEffect(() => {
    pokemonInfo(pokeUrl).then(data => {
        setPokemon(data);
    });

  },[pokeUrl])

  function handleOpenPokemon() {
    modal.current.showModal();
  }


  const positioning = 'top-[-90%] hover:top-[-120%]';
  const smPositioning = 'sm:top-[-60%] sm:hover:top-[-90%]';
  const mdPositioning = 'md:top-[-100%] md:hover:top-[-120%]';
  const lgPositioning = 'lg:top-[-110%] lg:hover:top-[-130%]';
  const xlPositioning = 'xl:top-[-100%] xl:hover:top-[-120%]';
  const twoxlPositioning = '2xl:top-[-180%] 2xl:hover:top-[-210%]';
  
  return (
    <>
      <div className='w-full h-36 md:h-44 lg:h-52 xl:h-64' key={pokeUrl}>

        <div className='shadow-md shadow-slate-400 rounded-xl cursor-pointer' onClick={() => handleOpenPokemon()}>
            <div className="flex justify-center h-20 rounded-t-xl bg-gradient-to-tr from-slate-300 to-slate-700 p-2 relative">
              {pokemon.sprites?.other?.home.front_default ? (
                    <img className={`w-full absolute ${positioning} ${smPositioning} ${mdPositioning} ${lgPositioning} ${xlPositioning} ${twoxlPositioning} hover:scale-125 transition-all duration-300`}
                    src={pokemon.sprites?.other?.home.front_default }
                    alt={pokemon.name}
                    loading="lazy"
                    onClick={() => handleOpenPokemon()}
                  />
                ) : (
                    <Loader />
                )
              }
            </div>
            <div className="flex justify-between text-xs font-bold rounded-b-xl bg-gray-100 p-2">
              <p>#{pokemon.id}</p>
              <p className="uppercase">{pokemon.name}</p>
            </div>
        </div>
      </div>
      <PokeInfoModal pokemon={pokemon} ref={modal} />
    </>
  )
}

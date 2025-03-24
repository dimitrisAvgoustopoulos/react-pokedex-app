import typeColors from "../../typeColors.json";
import Loader from "../Loader";

export default function General({pokemon}) {

    function playCry() {
        const crie = new Audio(pokemon.cries?.latest);
        crie.play();
    }

    return(
        <div className="flex flex-col items-center justify-center gap-2">
            {pokemon.sprites?.other?.home.front_default ? 
                <img src={pokemon.sprites?.other?.home.front_default} alt={pokemon.name} className="w-2/3 max-w-md cursor-pointer transition-all duration-200 active:scale-110" 
                    onMouseDown={()=>{playCry()}}
                />
                : <Loader className="mt-72"/>
            }
            <ul className="flex flex-row items-center gap-2 mt-2 sm:gap-4 sm:mt-4">
            {pokemon.types?.map((type) => (
                <li key={type.type.name} className="text-white text-lg font-semibold p-1 w-20 text-center rounded-xl sm:text-3xl sm:w-40" style={{ backgroundColor: typeColors[type.type.name] }}>
                {type.type.name}
                </li>
            ))} 
            </ul>
            <div className="flex flex-col items-center gap-4 mx-4 mt-8 sm:gap-8 sm:mt-12">
                <div className="flex gap-4 font-semibold text-xl text-slate-400 sm:text-3xl sm:gap-8">
                    <p>{pokemon.weight / 10} kg</p>
                    <p>{pokemon.height / 10} m</p>
                </div>
            </div>
        </div>
    )
}

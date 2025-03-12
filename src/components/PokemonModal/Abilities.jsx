
export default function Abilities({ pokemon }){
  return (
    <div className="flex flex-col gap-4 mx-4 mt-8 sm:mx-8 sm:mt-16">
        <h2 className="text-2xl font-bold sm:text-4xl sm:mb-6">Abillities</h2>
        <ul className="flex flex-wrap gap-4">
        {pokemon.abilities.map((ability, index) => (
          <li key={index} className="bg-fuchsia-500 text-white text-xs font-bold p-1 w-auto rounded-lg sm:text-xl sm:p-2">
            {ability.ability.name}
          </li>
        ))}
        </ul>
    </div>
    
  );
};

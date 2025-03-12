
export default function Stats({pokemon}){
    return(
        <div className="flex flex-col gap-4 mx-4 mt-8 sm:mt-16 sm:mx-8">
            <h2 className="text-2xl font-bold sm:text-4xl sm:mb-6">Stats</h2>
            <ul className="flex flex-col">
            {pokemon.stats?.map((stat) => (
                <li key={stat.stat.name} className="flex justify-between my-1 bg text-slate-400 text-xs uppercase font-bold sm:text-xl sm:my-2">
                <p>{stat.stat.name}</p>
                <div className="flex">
                    <p className="mx-2 text-black">{stat.base_stat}</p>
                    <progress value={stat.base_stat} max="100" className={`${stat.base_stat < 50 ? 'lowpower' : 'progressBar'} sm:h-6 sm:w-80 lg:w-96 xl:w-[500px] 2xl:w-[700px]`}/>
                </div>
                </li>
            ))}
            </ul>
        </div>
    )
}